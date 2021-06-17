import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectPreview from './ProjectPreview';

const ProjectsGallery = () => {

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
					placeholder: BLURRED
					formats: [AUTO,WEBP]
					transformOptions: {fit: COVER cropFocus: NORTH}
					width: 1400
					height: 750
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
					placeholder: BLURRED
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
						<ProjectPreview
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
export default ProjectsGallery;
