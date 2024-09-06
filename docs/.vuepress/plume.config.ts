import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'cyg_logo_dark_large.svg',
  logoDark: 'cyg_logo_light_large.svg',
  appearance: true,
  contributors: false,

  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'Cygnomatic',
    description: '逐雁创新机器人实验室',
    // circle: true,
    // location: 'BUPT, Beijing',
    // organization: '',
  },

  footer: { message: "逐雁创新机器人实验室", copyright: 'Copyright © 2022-2024 Cygnomatic' },

  navbar,
  notes
})
