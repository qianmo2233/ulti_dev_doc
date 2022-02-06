const sidebar = require("./sidebar.js");

module.exports = {
    title: 'Ulti Developer',
    description: '我的个人网站',
    head: [ 
      ['link', { rel: 'icon', href: '/logo.jpg' }],
    ],
    base: '/',
    theme: '@vuepress/theme-default',
    themeConfig: {
      navbar:[
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