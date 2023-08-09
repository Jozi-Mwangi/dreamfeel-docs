import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo:(
    <>
      <span style={{marginLeft: ".4em", fontWeight: 800}} >
        Dreamfeel
      </span>
    </>
  ),

  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: "https://github.com/Jozi-Mwangi/dreamfeel-docs.git",
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
