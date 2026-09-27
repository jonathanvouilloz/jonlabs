const author = {
    name: `Jonathan Vouilloz`,
    nickname: `Jon Labs`,
    linkedin: `https://www.linkedin.com/in/jonathan-vouilloz-3b5741139/`,
    github: `https://github.com/jonathanvouilloz`,
    youtube: `https://www.youtube.com/@jonvolio`,
    substack: `https://substack.com/@jonvolio`,
    email: `mailto:contact@jonlabs.ch`,
    location: `Genève, Suisse`
}

const cta = {
    primary: {
        text: `Discuter de mon projet`,
        link: `/contact`
    },
    secondary: {
        text: `Voir mes réalisations`,
        link: `#portfolio`
    }
}

const services = [
    {
        id: 'web-dev',
        title: 'Développement de site web',
        description: 'Un site rapide et clair, qui donne envie de vous contacter. Dès CHF 750.',
        icon: 'ri-code-s-slash-line',
        link: '/services/creation-site-web'
    },
    {
        id: 'app-mobile',
        title: 'Application mobile',
        description: 'Une app iPhone et Android pour vos clients ou votre équipe, de l\'idée aux stores.',
        icon: 'ri-smartphone-line',
        link: '/services/developpement-application-mobile'
    },
    {
        id: 'seo-local',
        title: 'Référencement local',
        description: 'Votre site et votre fiche Google remontent quand on vous cherche près de chez vous.',
        icon: 'ri-map-pin-line',
        link: '/services/referencement-local'
    },
    {
        id: 'ia',
        title: 'IA pour votre entreprise',
        description: 'Des agents IA qui prennent en charge les tâches répétitives, et une formation pour votre équipe.',
        icon: 'ri-robot-2-line',
        link: '/consultant-ia'
    }
]

const techStack = [
    'Astro',
    'React',
    'Node.js',
    'Tailwind',
    'Figma',
    'Make',
    'Zapier',
    'Supabase',
    'PostgreSQL'
]

// Legacy export for backward compatibility
const buy = {
    title: `Voir sur GitHub`,
    link: `#`
}

export { author, cta, services, techStack, buy }