import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'UltiKits.dev()',
  description: 'UltiKits Development Docs',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/icon-512x512.png',
    author: 'UltiKits Dev Team',
    docsRepo: 'https://github.com/qianmo2233/ulti_dev_doc',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/dev/': [
        {
          text: '开发文档',
          children: ['/dev/', 'email-game', 'inventory', 'packet']
        },
      ]
    },
    navbar:
    [
      { text: '主页', link: '/' },
      { text: '开发文档', link: '/dev/' },
      { text: 'API字典', link: '/api/' },
      { text: 'GitHub仓库', link: 'https://github.com/wisdommen/UltiTools' },
    ],
    bulletin: {
      body: [
        {
          type: 'text',
          content: `🎉🎉🎉 UltiKits 开发文档现已更新改版，API字典目前正在努力整理中，希望大家在 QQ 群和 GitHub 踊跃反馈。`,
          style: 'font-size: 12px;'
        },
      ],
    },
  }),
  // debug: true,
})
