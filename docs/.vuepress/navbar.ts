import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '关于我们', link: '/notes/about/intro' },
  {
    text: '加入我们',
    items: [
      { text: '机械组（结构组）', link: '/notes/recruit/mecha', icon: 'f7:wrench' },
      { text: '电控组（嵌入式组）', link: '/notes/recruit/embed', icon: 'ph:cpu' },
      { text: '视觉组（算法组）', link: '/notes/recruit/vision', icon: 'material-symbols:camera-outline' },
    ]
  },
])
