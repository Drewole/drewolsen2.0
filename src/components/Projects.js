import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './Project';

const Projects = () => {
	const data = useStaticQuery(graphql`
		{
		allProjectsJson {
			edges {
			node {
				name
				id
				type
				extSite
				slug
				year
				longDescription
				shortDescription
				tags
				squareImg {
					childImageSharp {
						fluid {
						srcWebp
						originalName
						}
					}
				}
				frontImg {
					childImageSharp {
						id
						fluid(maxWidth: 1450, maxHeight: 700, fit: COVER) {
						srcWebp
						originalName
						}
					}
				}
				insideImg {
					childImageSharp {
						fluid {
						srcWebp
						}
					}
				}
			}
			}
		}
		}
	`);
	const projects = data.allProjectsJson.edges
	console.log(projects)
	return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>Some of My Work.</h1>
					<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						{projects.map(({ node: project }) => {
							const title = project.name;
							const shortDescription = project.shortDescription;
							const longDescription = project.longDescription;
							const id = project.id;
							const tags = project.tags;
							const type = project.type;
							const year = project.year;
							const extSite = project.extSite;
							const slug = project.slug;
							const squareImg = project.squareImg;
							const frontImg = project.frontImg;
							console.log(squareImg)
							console.log(frontImg)
							return (
								<Project
									key={id}
									id={id}
									title={title}
									year={year}
									extSite={extSite}
									shortDescription={shortDescription}
									longDescription={longDescription}
									tags={tags}
									type={type}
									slug={slug}
									squareImg={squareImg}
									frontImg={frontImg}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Projects;
