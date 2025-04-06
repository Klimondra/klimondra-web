const redirects = [
    { // Home
        source: '/home',
        destination: '/',
    },
    { // Contact
        source: '/contact',
        destination: '/kontakt',
    },
    { // Projekty
        source: '/projects',
        destination: '/projekty',
    },
    {
        source: '/projects/:projectName',
        destination: '/projekty/:projectName',
    },
    {
        source: '/projekt/:projectName',
        destination: '/projekty/:projectName',
    },
    {
        source: '/project/:projectName',
        destination: '/projekty/:projectName',
    },
    { // Odkazy
        source: '/odkazy',
        destination: '/linktree',
    },
    {
        source: "/links",
        destination: "/linktree",
    }
]

module.exports = redirects