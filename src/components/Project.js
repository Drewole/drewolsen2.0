import React from 'react'
import { FaTag, FaGithub } from "react-icons/fa"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Project = ({ name, year, longDescription, tags, github, extSite }) => {
    return (
        <section className="project-single">
            <img src="https://placeholder.com/1400x800" alt={name} />
            {/* <GatsbyImage image={mainImage} alt={title} /> */}
            <div className="flex-wrapper">
                <div className="text-content">

                    <h1>{name}</h1>
                    <h4>{year}</h4>
                    <p>{longDescription}</p>
                    <span className="tags">
                        <FaTag /> <span>{tags}</span>
                    </span>

                    <div className="link-box">
                        <a href="/#portfolio" className="btn back-to-projects">
                            Back to Projects
                        </a>
                        {extSite && (
                            <a className="btn" href={`${extSite}`}>
                                View Site
                            </a>
                        )}

                        {github && (
                            <p className="github"><a href={`https://github.com${github}`}>View on <span>Github <FaGithub /></span></a></p>
                        )}

                    </div>
                </div>
                <div className="gallery">
                </div>


            </div>

        </section>
    )
}

export default Project
