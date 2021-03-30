module.exports = {
  base:'/bear-ui/',
  title: 'Bear UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: '博客', link: 'https://juejin.cn/user/1037573431242270/posts' },
      { text: '交流', link: 'https://github.com/KailoveQ/GuLu-Vue2' },
    ],
    sidebar: [
      {
        title:'入门',
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/tabs',
          '/components/toast',
          '/components/popover',
          '/components/collapse',
        ],
      }
    ],
  }
}