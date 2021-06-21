import React from 'react'
import { graphql } from 'gatsby'
import Layout from './../../layouts/Layout'
import Footer from '../../components/Footer'
import Project from '../../components/Project'

export const query = graphql`
    query ($slug: String!) {
        projectsJson(slug: {eq: $slug}) {
            id
            name
            type
            year
            longDescription
            tags
            github
            extSite
            frontImg {
              childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO,WEBP]
                    layout: FULL_WIDTH
                    transformOptions: {fit: COVER cropFocus: NORTH}
                    width: 1400
                    height: 750
                )
              }
            }
            insideImg {
              childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    transformOptions: {fit: COVER cropFocus: NORTH}
                    width: 800
                    height:800
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
                frontImg={project.frontImg}
                insideImg={project.insideImg}
                mobileImg={project.mobileImg}

            />
            <Footer />
        </Layout>
    )
}

export default ProjectLayout
