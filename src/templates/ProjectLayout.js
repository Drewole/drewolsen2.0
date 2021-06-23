import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Layout'
import Footer from '../components/Footer'
import Project from '../components/Project'

export const query = graphql`
    query ($slug: String!) {
        projectsJson(slug: {eq: $slug}) {
            name
            slug
            year
            longDescription
            tags
            github
            extSite
            mainImg {
              childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout:FULL_WIDTH
                    formats: [AUTO,WEBP]
                    transformOptions: {fit: COVER cropFocus: NORTH}
                    sizes: "500,800,1400,1800"
                )
              }
            }
            frontImg {
              childImageSharp {
                gatsbyImageData(
                    layout:CONSTRAINED
                    formats: [AUTO,WEBP]
                    transformOptions: {fit: COVER cropFocus: NORTH}
                    width: 800
                    height: 800
                )
              }
            }
            insideImg {
              childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    transformOptions: {fit: COVER cropFocus: NORTH}
                    width: 800
                    height: 800
                )
              }
            }
           	mobileImg {
				      childImageSharp {
                  gatsbyImageData(
                    formats: [AUTO, WEBP]
                    transformOptions: {fit: COVER cropFocus: NORTH}
                    width: 800
                    height:800
                  )
              }
            }
        }
    }
`
const ProjectLayout = ({ data }) => {
  const project = data.projectsJson;
  return (
    <Layout>
      <Project
        id={project.id}
        name={project.name}
        type={project.type}
        year={project.year}
        longDescription={project.longDescription}
        tags={project.tags}
        github={project.github}
        extSite={project.extSite}
        mainImg={project.mainImg}
        frontImg={project.frontImg}
        insideImg={project.insideImg}
        mobileImg={project.mobileImg}

      />
      <Footer />
    </Layout>
  )
}

export default ProjectLayout
