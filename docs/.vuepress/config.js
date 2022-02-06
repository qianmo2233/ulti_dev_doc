const sidebar = require("./sidebar.js");

module.exports = {
    title: 'Ulti Developer',
    description: 'UltiKits开发文档',
    head: [ 
      ['link', { rel: 'icon', href: '/logo.jpg' }],
    ],
    base: '/',
    theme: '@vuepress/theme-default',
    locales: {
        '/': {
            lang: 'en_US',
            title: 'Ulti Developer',
            description: 'UltiKits Development Document',
        },
        '/zh/': {
            lang: '简体中文',
            title: 'Ulti Developer',
            description: 'UltiKits开发文档',
        },
    },
    themeConfig: {
      navbar:[
          {
              text: 'Tools v5/Core v1',
              children: [
                  {text: 'Tools v6/Core v2', link: 'https://github.com/users/wisdommen/projects/2' },
                  {text: '更新记录', link: 'https://github.com/wisdommen/UltiTools/releases' },
              ],
          },
        {text: 'Github', link: 'https://github.com/wisdommen/UltiTools' },
        {text: '用户手册', link: 'https://doc.ultitools.ultikits.com'},
        {text: 'UltiKits官网', link: 'https://ultikits.com'}      
      ],
      sidebar: sidebar,
    },
    plugins: [
        'vuepress-plugin-auto-sidebar',
        '@vuepress/plugin-search',
    ]
};