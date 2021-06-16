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
                    gatsbyImageData(outputPixelDensities: 1.5, quality: 90)
                }
            }
            insideImg {
                childImageSharp {
                    gatsbyImageData(outputPixelDensities: 1.5, quality: 90)
                }
            }
        }
    }
`
const ProjectLayout = ({ data }) => {
    const project = data.projectsJson;
    // const mainImage = getImage(project.frontImage.childImageSharp.gatsbyImageData)
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
            />
            <Footer />
        </Layout>
    )
}

export default ProjectLayout
