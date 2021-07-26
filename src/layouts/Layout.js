import React from "react"
import "../scss/main.scss"
import Helmet from "react-helmet"
import { siteMetadata } from "../../gatsby-config"
import Header from '../components/Header'
// import Favicon from "../images/favicon.png"

const Layout = ({ children }) => (
  <>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}>
      <meta name="description" content="Drew Olsen's Personal Portfolio" />
      <meta name="title" property="og:title" content="Drew Olsen's Portfolio" />
      <meta property="og:type" content="Website" />
      <meta name="image" property="og:image" content="https://flic.kr/p/2mdvcNw" />
      <meta name="description" property="og:description" content="Drew Olsen's Portfolio" /><meta name="author" content="Drew Olsen" />
      <meta name={siteMetadata.author} description={siteMetadata.description} />
      <title>{siteMetadata.title}</title>
    </Helmet>
    <Header />
    {children}
  </>
)

export default Layout
