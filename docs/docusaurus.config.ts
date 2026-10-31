import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Personal Student Project Documentation',
    tagline: 'A web-based catering planning application',
    favicon: 'img/favicon.ico',

    future: {
        v4: true,
    },

    url: 'https://lukaeichten.github.io',
    baseUrl: '/PersonalStudentProject/',

    organizationName: 'lukaeichten',
    projectName: 'PersonalStudentProject',

    onBrokenLinks: 'throw',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'dev',
                path: 'dev',
                routeBasePath: 'dev',
                sidebarPath: './sidebars-dev.ts',
                editUrl: 'https://github.com/lukaeichten/PersonalStudentProject/tree/master/docs',
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: 'changelog',
                path: 'changelog',
                routeBasePath: 'changelog',
                sidebarPath: './sidebars-changelog.ts',
                editUrl: 'https://github.com/lukaeichten/PersonalStudentProject/tree/master/docs',
            }

        ]
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl:
                        'https://github.com/lukaeichten/PersonalStudentProject/tree/master/docs/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    editUrl:
                        'https://github.com/lukaeichten/PersonalStudentProject/tree/master/docs/',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // TODO: Replace with the project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Personal Student Project',
            logo: {
                alt: 'Personal Student Project Logo',
                src: 'img/logo.svg',  // TODO: Replace with the project's logo
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'userDocs',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    type: 'docSidebar',
                    docsPluginId: 'dev',
                    sidebarId: 'devDocs',
                    position: 'left',
                    label: 'Dev Docs',
                },
                {
                    type: 'docSidebar',
                    docsPluginId: 'changelog',
                    sidebarId: 'changelogSidebar',
                    position: 'left',
                    label: 'Changelog',
                },
                {
                    to: '/blog',
                    position: 'left',
                    label: 'Blog',
                },
                {
                    href: 'https://github.com/lukaeichten/PersonalStudentProject',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Docs',
                            to: '/docs/intro',
                        },
                        {
                            label: "Dev Docs",
                            to: '/dev/',
                        },
                        {
                            label: "Changelog",
                            to: '/changelog/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub Discussion',
                            href: 'https://github.com/lukaeichten/PersonalStudentProject/discussions',
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/lukaeichten/PersonalStudentProject',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Personal Student Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
