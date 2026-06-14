// Renvoie un statut HTTP 410 Gone pour les anciennes URLs de la section EN (jonvolio),
// supprimée pour concentrer le site sur le contenu FR. Signal propre de désindexation
// pour les moteurs (préférable à un 404 ou à une redirection EN→FR non pertinente).
export default function handler(req, res) {
  res.statusCode = 410;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page supprimée — Jon Labs</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #FEFFF0; color: #000;
           display: flex; min-height: 100vh; align-items: center; justify-content: center;
           margin: 0; padding: 2rem; text-align: center; }
    .box { border: 2px solid #000; background: #fff; padding: 2.5rem;
           box-shadow: 4px 4px 0 rgba(0,0,0,0.3); max-width: 32rem; }
    h1 { font-size: 1.75rem; margin: 0 0 1rem; }
    p { font-size: 1.05rem; line-height: 1.5; }
    a { background: #BAE6FF; border: 2px solid #000; padding: 0.6rem 1.2rem;
        display: inline-block; margin-top: 1.5rem; text-decoration: none; color: #000;
        font-weight: 600; }
    a:hover { background: #FFDC58; }
  </style>
</head>
<body>
  <div class="box">
    <h1>Cette page n'existe plus</h1>
    <p>La section anglophone du site a été retirée. Retrouvez tout le contenu actuel sur la page d'accueil.</p>
    <a href="/">Aller à l'accueil</a>
  </div>
</body>
</html>`);
}
