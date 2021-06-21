import React from 'react'
import { FaTag, FaGithub } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Project = ({ name, year, longDescription, tags, github, extSite, frontImg, insideImg, mobileImg }) => {

    const imageHero = getImage(frontImg)
    const imageMobile = getImage(mobileImg)
    const imageInside = getImage(insideImg)
    return (
        <section className="project-single">
            <GatsbyImage image={imageHero} alt={name} />
            <div className="flex-wrapper">
                <div className="text-content">

                    <h1>{name}</h1>
                    <h4>{year}</h4>
                    <p>{longDescription}</p>
                    <span className="tags">
                        <FaTag /> <span>{tags}</span>
                    </span>

                    <div className="link-box">
                        <Link to="/#portfolio" className="btn back-to-projects">
                            More Work
                        </Link>
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
                    <GatsbyImage image={imageInside} alt={`Inside image of ${name}'s website`} />
                    {imageMobile && (
                        <GatsbyImage image={imageMobile} alt={`Mobile layout of ${name}'s website`} />
                    )}

                </div>

            </div>

        </section>
    )
}

export default Project
