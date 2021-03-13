module.exports = {
  base: '/Bear-UI/',
  title: 'Bear UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/install/'},
      {text: '交流', link: 'https://github.com/wh2887/init-ui/issues'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/tabs',
          '/components/popover',
          '/components/toast',
        ],
      }
    ],
  }
}