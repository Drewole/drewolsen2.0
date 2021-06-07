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
            frontImg {
              childImageSharp {
                gatsbyImageData(
					placeholder: BLURRED
					formats: [WEBP]
					width: 1400
					height: 800
				)
              }
            }
            insideImg {
              childImageSharp {
                gatsbyImageData(
					placeholder: BLURRED
					formats: [WEBP]
					)
              }
            }
            squareImg {
              childImageSharp {
                gatsbyImageData(
					width: 800
					placeholder: BLURRED
					formats: [WEBP]
					)
              }
            }
          }
        }
      }
    }
  `)
	const projects = data.allProjectsJson.edges

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
