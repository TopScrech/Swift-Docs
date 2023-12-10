import { defineConfig } from 'vitepress'

let bisquitUrl = 'https://bisquit.host'
let currentYear = new Date().getFullYear()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Swift-Docs",
  description: "Oki-doci",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'SwiftUI', link: '/markdown-examples' },
          { text: 'ScrechKit', link: '/api-examples' }
        ]
      }
    ],

    footer: {
      message: `Sponsored by <a href="${bisquitUrl}" target="_blank">Bisquit.Host</a>`,
      copyright: `Copyright © 2023-${currentYear} TopScrech`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
