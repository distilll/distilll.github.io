const themeConfig = require('./config/theme/')

module.exports = {
  base: '/',
  title: "distilll",
  description: '自作自受，自性自度',
  dest: 'docs/.vuepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  codeTheme: 'coy',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    // 鼠标点击特效
    "cursor-effects",
    // 图片自适应
    '@vuepress/medium-zoom',
    // 流程图
    'flowchart',
    // 复制代码
    [
      'vuepress-plugin-code-copy',
      {
        successText: '复制成功',
      }
    ],
  ],
}
