import React from "react"
import "../scss/main.scss"
import Helmet from "react-helmet"
import { siteMetadata } from "../../gatsby-config"
import Header from '../components/Header'
// import Favicon from "../images/favicon.png"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <meta name={siteMetadata.author} description={siteMetadata.description} />
      <title>{siteMetadata.title}</title>
      {/* <link rel="icon" href={Favicon} type="image/x-icon" /> */}
    </Helmet>
    <Header />
    {children}
  </>
)

export default Layout
