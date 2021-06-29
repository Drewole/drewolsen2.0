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
      <meta name={siteMetadata.author} description={siteMetadata.description} />
      <title>{siteMetadata.title}</title>
    </Helmet>
    <Header />
    {children}
  </>
)

export default Layout
