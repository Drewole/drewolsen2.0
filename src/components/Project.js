import React from 'react'
import { FaTag, FaGithub } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Project = ({ name, year, longDescription, tags, github, extSite, frontImg, mainImg, insideImg, mobileImg }) => {

    const imageHero = getImage(mainImg)
    const imageFront = getImage(frontImg)
    const imageMobile = getImage(mobileImg)
    const imageInside = getImage(insideImg)
    return (
        <section className="project-single">
            {imageHero && (
                <GatsbyImage objectFit="cover" height="900" loading="eager" image={imageHero} alt={`Front page of ${name}'s website`} />
            )}
            <div className="flex-wrapper">
                <div className="text-content">

                    <h1>{name}</h1>
                    <h4>{year}</h4>
                    <p>{longDescription}</p>
                    <span className="tags">
                        <FaTag /> <span>{tags}</span>
                    </span>

                    <div className="link-box">
                        <AniLink entryOffset={30} swipe direction="right" duration={3} to="/#portfolio" className="btn back-to-projects">
                            More Work
                        </AniLink>
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

                    {imageInside && (
                        <GatsbyImage loading="lazy" aspectratio={1 / 1} image={imageInside} alt={`Inside page of ${name}'s website`} />
                    )}
                    {imageMobile && (
                        <GatsbyImage loading="lazy" aspectratio={1 / 1} image={imageMobile} alt={`Mobile layout of ${name}'s website`} />
                    )}
                    {imageFront && (
                        <GatsbyImage loading="lazy" aspectratio={1 / 1} image={imageFront} alt={`Front page of ${name}'s website`} />
                    )}

                </div>

            </div>

        </section>
    )
}

export default Project
