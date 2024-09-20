import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '关于我们',
    link: '/about/intro/'
  },
  {
    text: '加入我们',
    link: '/recruit/',
  },
  {
    text: '常见问题',
    link: '/faq/',
  },
  {
    text: '实验室地址',
    link: '/about/location/',
  }
])
