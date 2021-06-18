import React from "react"

import Layout from "../layouts/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import ProjectsGallery from "../components/ProjectsGallery"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

const IndexPage = () => (

  <Layout>
    <Hero />
    <About />
    <ProjectsGallery />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
