import React from 'react'
import Head from './components/head'
import { DocsThemeConfig } from 'nextra-theme-docs'
const config: DocsThemeConfig = {
  head: Head,
  logo: <span ><b style={{cursor: "pointer"}}>OVERGROUND.DEV</b></span>,
  faviconGlyph: 'O',
  useNextSeoProps() {
    return {
      titleTemplate: "%s – OVERGROUND.DEV",
    };
  },
  project: {
    link: 'https://github.com/milhlhat/overground.dev',
  },
  docsRepositoryBase: 'https://github.com/milhlhat/overground.dev',
  footer: {
    text: '@milhlhat',
  },
}

export default config
