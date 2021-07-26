const versions = require('./versions.json');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Vericonomy Docs',
    tagline: 'The Vericonomy Handbook',
    url: 'https://docs.vericonomy.com',
    baseUrl: '/',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            fr: {
                label: 'Français',
            },
        },
    },
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    customFields: {
        description: 'Vericonomy documentation will let you know everything you need about Vericoin and Verium CryptoCurrency. You will also find resources, 3rd party apps documentation, ...',
    },
    organizationName: 'VeriConomy', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    themeConfig: {
        sidebarCollapsible: true,
        hideableSidebar: true,
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
        },
        navbar: {
            hideOnScroll: true,
            title: 'Vericonomy Docs',
            logo: {
                alt: 'Vericonomy Logo',
                src: 'img/logo.png',
                srcDark: 'img/logo.png',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'General',
                    docsPluginId: 'default',
                },
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Wallets',
                    docsPluginId: 'wallets',
                },
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: '3rd Party apps',
                    docsPluginId: 'thirdpartyapps',
                },
                {
                    type: 'doc',
                    docId: 'support',
                    position: 'left',
                    label: 'About',
                    docsPluginId: 'about',
                },
                {
                    href: 'https://slack.vericonomy.com',
                    position: 'right',
                    className: 'header-slack-link',
                    'aria-label': 'Slack',
                },
                {
                    href: 'https://discord.gg/HSYAt4HWeT',
                    position: 'right',
                    className: 'header-discord-link',
                    'aria-label': 'Discord',
                },
                {
                    href: 'https://t.me/VeriCoinandVerium',
                    position: 'right',
                    className: 'header-telegram-link',
                    'aria-label': 'Telegram',
                },
                {
                    href: 'https://twitter.com/vericonomy',
                    position: 'right',
                    className: 'header-twitter-link',
                    'aria-label': 'Twitter',
                },
                {
                    href: 'https://github.com/VeriConomy',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
                // {
                //     type: 'docsVersionDropdown',
                //     position: 'right',
                //     dropdownActiveClassDisabled: true,
                // },
                {
                    type: 'localeDropdown',
                    position: 'right',
                    dropdownItemsAfter: [{
                        href: 'https://github.com/VeriConomy/docs',
                        label: 'Help Us Translate',
                    }, ],
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Learn',
                    items: [{
                            label: 'Introduction',
                            to: '/general/intro',
                        },
                        {
                            label: 'Vericoin',
                            to: '/general/intro',
                        },
                        {
                            label: 'Verium',
                            to: '/general/intro',
                        },
                        {
                            label: '3rd Party apps',
                            to: '/general/intro',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Official Website',
                            href: 'https://www.vericonomy.com',
                        },
                        {
                            label: 'Team',
                            to: '/about/team',
                        },
                        {
                            label: 'Applications',
                            to: '/about/apps',
                        },
                        {
                            label: 'Help',
                            to: '/about/support',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'GitHub',
                            href: 'https://github.com/VeriConomy',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/vericonomy',
                        },
                        {
                            label: 'Reddit',
                            href: 'https://www.reddit.com/r/vericoin/',
                        },
                        {
                            label: 'More ...',
                            to: '/community/chat',
                        },
                    ],
                },
                {
                    title: 'Legal',
                    // Please do not remove the privacy and terms, it's a legal requirement.
                    items: [{
                            label: 'Privacy',
                            to: '/about/legal/privacy',
                        },
                        {
                            label: 'Terms',
                            to: '/about/legal/terms',
                        },
                        {
                            label: 'Cookie Policy',
                            to: '/about/legal/cookie',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Vericonomy, Inc. Built with Docusaurus.`,
        },
    },
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'about',
                path: 'about',
                routeBasePath: 'about',
                editCurrentVersion: true,
                sidebarPath: require.resolve('./sidebarsAbout.js'),
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'community',
                path: 'community',
                routeBasePath: 'community',
                editCurrentVersion: true,
                sidebarPath: require.resolve('./sidebarsCommunity.js'),
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'thirdpartyapps',
                path: 'thirdpartyapps',
                routeBasePath: 'thirdpartyapps',
                editCurrentVersion: true,
                sidebarPath: require.resolve('./sidebarsThirdpartyapps.js'),
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'wallets',
                path: 'wallets',
                routeBasePath: 'wallets',
                editCurrentVersion: true,
                sidebarPath: require.resolve('./sidebarsWallets.js'),
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            '@docusaurus/plugin-ideal-image',
            {
                quality: 70,
                max: 1030, // max resized image's size.
                min: 640, // min resized image's size. if original is lower, use that size.
                steps: 2, // the max number of images generated between min and max (inclusive)
            },
        ],
        [
            '@docusaurus/plugin-pwa',
            {
                offlineModeActivationStrategies: [
                    'appInstalled',
                    'standalone',
                    'queryString',
                ],
                pwaHead: [{
                        tagName: 'link',
                        rel: 'icon',
                        href: 'img/vericonomy.png',
                    },
                    {
                        tagName: 'link',
                        rel: 'manifest',
                        href: 'manifest.json',
                    },
                    {
                        tagName: 'meta',
                        name: 'theme-color',
                        content: 'rgb(37, 194, 160)',
                    },
                    {
                        tagName: 'meta',
                        name: 'apple-mobile-web-app-capable',
                        content: 'yes',
                    },
                    {
                        tagName: 'meta',
                        name: 'apple-mobile-web-app-status-bar-style',
                        content: '#000',
                    },
                    {
                        tagName: 'link',
                        rel: 'apple-touch-icon',
                        href: 'img/vericonomy.png',
                    },
                    {
                        tagName: 'link',
                        rel: 'mask-icon',
                        href: 'img/vericonomy.png',
                        color: 'rgb(62, 204, 94)',
                    },
                    {
                        tagName: 'meta',
                        name: 'msapplication-TileImage',
                        href: 'img/vericonomy.png',
                    },
                    {
                        tagName: 'meta',
                        name: 'msapplication-TileColor',
                        content: '#000',
                    },
                ],
            },
        ]
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: 'general',
                    routeBasePath: 'general',
                    sidebarPath: require.resolve('./sidebarsGeneral.js'),
                    editUrl:
                        'https://github.com/VeriConomy/docs/general/edit/master/',
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    trailingSlash: false,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};