import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MdCardTravel } from 'react-icons/md';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import BackgroundImage from 'gatsby-background-image';
import SocialLinks from './SocialLinks';
import Dust from './Dust';

const BannerImage = () => {
	const data = useStaticQuery(
		graphql`
			query {
				desktop: file(relativePath: { eq: "pineTreesBkg.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1920) {
					...GatsbyImageSharpFluid_withWebp
					}
				}
				}
			}
    	`
	)

	// Set ImageData.
	const imageData = data.desktop.childImageSharp.fluid

	return (
		<BackgroundImage
			Tag="section"
			className={"banner-text"}
			fluid={imageData}
			backgroundColor={`#040e18`}
		>
			<Dust />
			<h1 className="responsive-headline">Full-Stack Developer</h1>
			<h3>
				A Multi-faceted Web Developer with a knack for effectively conceptualizing and delivering elegant, user-friendly solutions.
				<br />

			</h3>
			<AnchorLink className="btn" title="View my portfolio" to="/#portfolio">
				View My Portfolio{' '}
				<span>
					<MdCardTravel />
				</span>
			</AnchorLink>

			<hr />
			<SocialLinks />
		</BackgroundImage>

	)
}

export default BannerImage;
