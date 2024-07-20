// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blog',
  tagline: 'Blog',
  url:  process.env.BASE === 'zone' ? 'https://docs.lalifeier.io' : 'https://lalifeier.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lalifeier', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lalifeier/blog/edit/main/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/lalifeier/blog/edit/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // pages: {
        //   path: 'src/pages',
        //   routeBasePath: '/home',
        //   // include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        //   // exclude: [
        //   //   '**/_*.{js,jsx,ts,tsx,md,mdx}',
        //   //   '**/_*/**',
        //   //   '**/*.test.{js,jsx,ts,tsx}',
        //   //   '**/__tests__/**',
        //   // ],
        //   // mdxPageComponent: '@theme/MDXPage',
        //   // remarkPlugins: [require('remark-math')],
        //   // rehypePlugins: [],
        //   // beforeDefaultRemarkPlugins: [],
        //   // beforeDefaultRehypePlugins: [],
        // },
        // googleAnalytics: {
        //   trackingID: 'UA-141789564-1',
        //   anonymizeIP: true,
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Blog',
        logo: {
          alt: 'Blog Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '文档',
            // items: [
            //   {
            //     label: '',
            //     to: '',
            //   },
            // ]
          },
          // {to: '/blog', label: '博客', position: 'right'},
          {
            href: 'https://github.com/lalifeier/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // hideableSidebar: true,
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Docs',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Contact',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/lalifeier',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} lalifeier, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // tableOfContents: {
      //   minHeadingLevel: 2,
      //   maxHeadingLevel: 5,
      // },
      announcementBar: {
        id: 'support_us',
        content:
        '🚀 如果你觉得还不错, 就给一个 ⭐️ Start 吧 ~ <a target="_blank" rel="noopener noreferrer" href="https://github.com/lalifeier/blog">Click here</a> ',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      metadata: [
        {name: 'keywords', content: 'lalifeier'},
        {
          name: 'keywords',
          content: 'blog',
        },
      ],
      // i18n: {
      //   defaultLocale: 'en',
      //   locales: ['en', 'zh-Hans'],
      //   localeConfigs: {
      //     en: {
      //       htmlLang: 'en-GB',
      //     },
      //   },
      // },
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'lalifeier',
      // },
      // plugins: [
      //   [
      //     '@docusaurus/plugin-pwa',
      //     {
      //       debug: true,
      //       offlineModeActivationStrategies: [
      //         'appInstalled',
      //         'standalone',
      //         'queryString',
      //       ],
      //       pwaHead: [
      //         {
      //           tagName: 'link',
      //           rel: 'icon',
      //           href: '/img/docusaurus.png',
      //         },
      //         {
      //           tagName: 'link',
      //           rel: 'manifest',
      //           href: '/manifest.json', // 你的 PWA Manifest
      //         },
      //         {
      //           tagName: 'meta',
      //           name: 'theme-color',
      //           content: 'rgb(37, 194, 160)',
      //         },
      //       ],
      //     },
      //   ],
      // ]
    }),
};

module.exports = config;
