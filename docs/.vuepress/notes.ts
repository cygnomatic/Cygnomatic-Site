import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

export const note = defineNoteConfig({
  dir: 'notes',
  link: '/',
  sidebar: [
    {
      text: '关于我们',
      prefix: 'about',
      collapsed: false,
      icon: 'ic:outline-info',
      items: [
        'intro.md',
        'honors.md',
        'team.md',
      ],
    },
    {
      text: '加入我们',
      prefix: 'recruit',
      collapsed: false,
      icon: 'iconamoon:enter',
      items: [
        'README.md',
        'mecha.md',
        'embed.md',
        'vision.md',
        'circuit.md',
      ],
    },
  ],
})


export const notes = defineNotesConfig({
  dir: '',
  link: '/',
  notes: [
    note,
  ],
})

