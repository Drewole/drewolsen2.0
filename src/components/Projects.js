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
			github
            year
            longDescription
            shortDescription
            tags
            frontImg {
              childImageSharp {
                gatsbyImageData(
					placeholder: DOMINANT_COLOR
					formats: [AUTO,WEBP]
					transformOptions: {fit: COVER cropFocus: NORTH}
					aspectRatio: 16.9
				)
              }
            }
            insideImg {
              childImageSharp {
                gatsbyImageData(
					formats: [AUTO,WEBP]
					)
              }
            }
            squareImg {
              childImageSharp {
                gatsbyImageData(
					aspectRatio: 1.1
					formats: [AUTO,WEBP]
					transformOptions: {fit: COVER, cropFocus: NORTH}
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
			<h1>Some of My Work.</h1>
			<div id="portfolio-wrapper">
				{projects.map(({ node: project }) => {
					const title = project.name;
					const shortDescription = project.shortDescription;
					const longDescription = project.longDescription;
					const id = project.id;
					const github = project.github;
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
							github={github}
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
		</section>
	);
};
export default Projects;
