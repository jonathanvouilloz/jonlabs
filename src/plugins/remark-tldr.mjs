// remark-tldr — transforme le bloc « L'essentiel en bref » (quelle que soit la
// forme markdown écrite dans l'article) en un callout visuel `aside.co-tldr` rendu
// en Inter (design system blueprint), SANS toucher au contenu des articles.
//
// 3 formes gérées :
//   1. Blockquote : `> **L'essentiel en bref**` + puces dans le blockquote
//   2. Titre      : `## L'essentiel en bref` suivi d'une liste
//   3. Paragraphe : `**L'essentiel en bref**` (paragraphe gras seul) suivi d'une liste
//
// Ciblage strict par le texte du label → les blockquotes de témoignage/citation
// (serif) ne sont jamais touchés. On n'écrit rien : on annote les nœuds mdast avec
// `data.hName` / `data.hProperties` respectés par remark-rehype, et pour les formes
// titre/paragraphe on regroupe label + liste dans un conteneur `aside`.

function textOf(node) {
  if (typeof node.value === 'string') return node.value;
  if (Array.isArray(node.children)) return node.children.map(textOf).join('');
  return '';
}

function normalize(s) {
  return s.toLowerCase().replace(/[^a-zàâäéèêëîïôöùûüç]/g, '');
}
function isLabel(s) {
  return normalize(s).startsWith('lessentielenbref');
}

function iconNode() {
  return {
    type: 'emphasis',
    data: { hName: 'i', hProperties: { className: ['ri-key-2-line', 'co-tldr-ic'], 'aria-hidden': 'true' } },
    children: [],
  };
}
function headNode() {
  return {
    type: 'paragraph',
    data: { hName: 'p', hProperties: { className: ['co-tldr-head'] } },
    children: [iconNode(), { type: 'strong', children: [{ type: 'text', value: "L'essentiel en bref" }] }],
  };
}
function markList(node) {
  if (node.type === 'list') node.data = { ...(node.data || {}), hProperties: { className: ['co-tldr-list'] } };
  return node;
}

// Forme 1 — blockquote transformé sur place
function isTldrBlockquote(bq) {
  const firstPara = Array.isArray(bq.children) ? bq.children.find((c) => c.type === 'paragraph') : null;
  return !!firstPara && isLabel(textOf(firstPara));
}
function transformBlockquote(bq) {
  bq.data = { ...(bq.data || {}), hName: 'aside', hProperties: { className: ['co-tldr'] } };
  let headDone = false;
  for (const child of bq.children) {
    if (!headDone && child.type === 'paragraph') {
      child.data = { ...(child.data || {}), hName: 'p', hProperties: { className: ['co-tldr-head'] } };
      child.children.unshift(iconNode());
      headDone = true;
    } else {
      markList(child);
    }
  }
}

// Formes 2 & 3 — label (heading ou paragraphe gras) détecté au niveau d'un tableau
// d'enfants ; on regroupe label + contenu suivant (jusqu'au prochain titre, en
// s'arrêtant après la première liste) dans un aside.co-tldr.
function isLabelHeading(node) {
  return node.type === 'heading' && node.depth <= 3 && isLabel(textOf(node));
}
function isLabelParagraph(node) {
  // paragraphe COURT valant essentiellement le label (évite un faux positif sur un
  // paragraphe courant qui commencerait par les mêmes mots)
  return node.type === 'paragraph' && isLabel(textOf(node)) && normalize(textOf(node)).length <= 22;
}

function processChildren(parent) {
  const kids = parent.children;
  const out = [];
  for (let i = 0; i < kids.length; i++) {
    const node = kids[i];

    if (node.type === 'blockquote' && isTldrBlockquote(node)) {
      transformBlockquote(node);
      out.push(node);
      continue;
    }

    if (isLabelHeading(node) || isLabelParagraph(node)) {
      let j = i + 1;
      const body = [];
      while (j < kids.length) {
        if (kids[j].type === 'heading') break;
        const wasList = kids[j].type === 'list';
        body.push(markList(kids[j]));
        j++;
        if (wasList) break; // le TLDR = label + une liste
      }
      // absorbe un `---` (hr) immédiatement adjacent avant/après pour un rendu propre
      if (out.length && out[out.length - 1].type === 'thematicBreak') out.pop();
      if (kids[j] && kids[j].type === 'thematicBreak') j++;

      out.push({
        type: 'blockquote', // porteur ; hName='aside' prend le dessus au rendu
        data: { hName: 'aside', hProperties: { className: ['co-tldr'] } },
        children: [headNode(), ...body],
      });
      i = j - 1;
      continue;
    }

    if (Array.isArray(node.children)) processChildren(node);
    out.push(node);
  }
  parent.children = out;
}

export default function remarkTldr() {
  return (tree) => processChildren(tree);
}
