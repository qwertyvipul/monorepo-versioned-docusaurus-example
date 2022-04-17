// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Monorepo Version Docusaurus Example',
    tagline: 'Dinosaurs are cool',
    url: 'https://qwertyvipul.github.io',
    baseUrl: '/monorepo-versioned-docusaurus-example/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/qwertyvipul/monorepo-versioned-docusaurus-example',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/qwertyvipul/monorepo-versioned-docusaurus-example',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'project1',
                path: 'project1',
                routeBasePath: 'project1',
                sidebarPath: require.resolve('./project1/sidebar.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'project2',
                path: 'project2',
                routeBasePath: 'project2',
                sidebarPath: require.resolve('./project2/sidebar.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'project3',
                path: 'project3',
                routeBasePath: 'project3',
                sidebarPath: require.resolve('./project3/sidebar.js'),
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'My Site',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    { to: '/project1', label: 'Project 1', position: 'left' },
                    { to: '/project2', label: 'Project 2', position: 'left' },
                    { to: '/project3', label: 'Project 3', position: 'left' },
                    {
                        href: 'https://github.com/qwertyvipul/monorepo-versioned-docusaurus-example',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [],
                copyright: `Copyright © ${new Date().getFullYear()} | Vipul Sharma`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
