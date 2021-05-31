import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { MdCardTravel } from 'react-icons/md';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import SocialLinks from './SocialLinks';
import BackgroundImage from 'gatsby-background-image';

const BannerImage = () => (
	<StaticQuery
		query={graphql`
			{
				file(relativePath: { eq: "pineTreesBkg.jpg" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 1400) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={(query) => {
			// Set ImageData.
			const imageData = query.file.childImageSharp.fluid;
			return (
				<BackgroundImage
					Tag="section"
					className="hero-bkg"
					id="#home"
					fluid={imageData}
					backgroundColor={`#2f2b41`}
				>
					<div className="row banner">
						<div className="banner-text">
							<h1 className="responsive-headline">Full-Stack Web Developer</h1>
							<h3>
								A Multi-faceted Full-Stack Web Developer with a knack for effectively conceptualizing and
								delivering elegant, user-friendly solutions.
								<br />
								<AnchorLink title="View my portfolio" to="/#portfolio">
									View My Portfolio{' '}
									<span>
										<MdCardTravel />
									</span>
								</AnchorLink>
							</h3>
							<hr />
							<SocialLinks />
						</div>
					</div>
				</BackgroundImage>
			);
		}}
	/>
);

export default BannerImage;
