import { defineConfig } from 'vitepress'

let bisquitUrl = 'https://bisquit.host'
let currentYear = new Date().getFullYear()

export default defineConfig({
  title: 'Swift-Docs',
  description: 'Oki-doci',
  cleanUrls: true,
  themeConfig: {
    nav: [
      {
          text: 'Home',
          link: '/'
      },
      // {
        // text: 'Examples',
        // link: '/markdown-examples'
        // }
    ],
      search: {
          provider: 'local'
      },
      'sidebar': [
          {
              'text': 'SwiftUI',
              'link': '/swiftui',
              'items': [
                  {
                      'text': 'Layout',
                      'collapsed': true,
                      'items': [
                          {
                              'text': '👨‍💻 Stacks',
                              link: 'SwiftUI Layout/Stacks'
                          },
                          {
                              'text': '👨‍💻 List',
                              // link: 'SwiftUI Layout/List'
                          },
                          {
                              'text': '👨‍💻 DisclosureGroup',
                              // link: 'SwiftUI Layout/DisclosureGroup'
                          },
                          {
                              'text': '👨‍💻 Spacer',
                              // link: 'SwiftUI Layout/Spacer'
                          },
                          {
                              'text': '👨‍💻 Divider',
                              // link: 'SwiftUI Layout/Divider'
                          },
                          {
                              'text': '👨‍💻 TabView',
                              // link: 'SwiftUI Layout/Divider'
                          },
                          {
                              'text': '👨‍💻 LazyVStack & LazyHStack',
                              // link: 'SwiftUI Layout/Divider'
                          },
                          {
                              'text': '👨‍💻 Grid',
                              // link: 'SwiftUI Layout/Grid'
                          },
                          {
                              'text': '👨‍💻 Group',
                              // link: 'SwiftUI Layout/Group'
                          },
                          {
                              'text': '👨‍💻 Form',
                              // link: 'SwiftUI Layout/Form'
                          },
                          {
                              'text': '👨‍💻 GeometryReader',
                              // link: 'SwiftUI Layout/GeometryReader'
                          }
                      ]
                  },
                  {
                      'text': 'Elements',
                      'collapsed': true,
                      'items': [
                          {
                              'text': '👨‍💻 Text',
                              // link: 'Elements/Text'
                          },
                          {
                              'text': '👨‍💻 Image',
                              // link: 'Elements/Image'
                          },
                          {
                              'text': '👨‍💻 Link',
                              // link: 'Elements/Link'
                          },
                          {
                              'text': '👨‍💻 Map',
                              // link: 'Elements/Map'
                          }
                      ]
                  },
                  {
                      'text': 'Inputs',
                      'collapsed': true,
                      'items': [
                          {
                              'text': '👨‍💻 Toggle',
                          //     link: 'Inputs/Toggle'
                          },
                          {
                              'text': '👨‍💻 Picker',
                              //     link: 'Inputs/Picker'
                          },
                          {
                              'text': '👨‍💻 ImagePicker',
                              //     link: 'Inputs/ImagePicker'
                          },
                          {
                              'text': '👨‍💻 TextFields',
                              //     link: 'Inputs/TextFields'
                          },
                          {
                              'text': '👨‍💻 Slider',
                              //     link: 'Inputs/Slider'
                          },
                          {
                              'text': '👨‍💻 Stepper',
                              //     link: 'Inputs/Stepper'
                          },
                          {
                              'text': '👨‍💻 DatePicker',
                              //     link: 'Inputs/DatePicker'
                          },
                          {
                              'text': '👨‍💻 ImagePicker',
                              //     link: 'Inputs/ImagePicker'
                          }
                      ]
                  }
              ]
          },
          {
              text: 'ScrechKit',
              link: 'ScrechKit'
          }
      ],
    footer: {
      message: `Sponsored by <a href='${bisquitUrl}' target='_blank'>Bisquit.Host</a>`,
      copyright: `Copyright © 2023-${currentYear} TopScrech`
    },

    socialLinks: [
      {
          icon: 'github',
          link: 'https://github.com/topscrech/swift-docs'
      }
    ]
  }
})