import { defineConfig } from 'vitepress'

let bisquitUrl = 'https://bisquit.host'
let currentYear = new Date().getFullYear()

export default defineConfig({
  title: 'Swift-Docs',
  description: 'Oki-doci',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

      "sidebar": [
          {
              'text': 'SwiftUI',
              'link': '/swiftui',
              'items': [
                  {
                      'text': 'Layout',
                      'collapsed': true,
                      'items': [
                          {
                              'text': '👨‍💻 VStack & HSTack',
                              link: 'SwiftUI Layout/VStack'
                          },
                          {
                              'text': '👨‍💻 List'
                          },
                          {
                              'text': '👨‍💻 DisclosureGroup'
                          },
                          {
                              'text': '👨‍💻 ZStack'
                          },
                          {
                              'text': '👨‍💻 Spacer'
                          },
                          {
                              'text': '👨‍💻 Divider'
                          },
                          {
                              'text': '👨‍💻 LazyVStack & LazyHStack'
                          },
                          {
                              'text': '👨‍💻 Grid'
                          },
                          {
                              'text': '👨‍💻 Group'
                          },
                          {
                              'text': '👨‍💻 Form'
                          },
                          {
                              'text': '👨‍💻 GeometryReader'
                          }
                      ]
                  },
                  {
                      'text': 'Elements',
                      'collapsed': true,
                      'items': [
                          {
                              'text': '👨‍💻 Text'
                          },
                          {
                              'text': '👨‍💻 Image'
                          },
                          {
                              'text': '👨‍💻 Link'
                          },
                          {
                              'text': '👨‍💻 Map'
                          }
                      ]
                  },
                  {
                      'text': 'Inputs',
                      'collapsed': true,
                      'items': [
                          {
                              'text': '👨‍💻 Toggle'
                          },
                          {
                              'text': '👨‍💻 Picker'
                          },
                          {
                              'text': '👨‍💻 ImagePicker'
                          },
                          {
                              'text': '👨‍💻 TextField'
                          },
                          {
                              'text': '👨‍💻 SecureField'
                          },
                          {
                              'text': '👨‍💻 TextEditor'
                          },
                          {
                              'text': '👨‍💻 Slider'
                          },
                          {
                              'text': '👨‍💻 Stepper'
                          },
                          {
                              'text': '👨‍💻 DatePicker'
                          },
                          {
                              'text': '👨‍💻 ImagePicker'
                          }
                      ]
                  }
              ]
          }
      ],

    footer: {
      message: `Sponsored by <a href='${bisquitUrl}' target='_blank'>Bisquit.Host</a>`,
      copyright: `Copyright © 2023-${currentYear} TopScrech`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/topscrech/swift-docs' }
    ]
  }
})
