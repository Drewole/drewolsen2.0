exports.createPages = async ({ graphql, actions, reporter }) => {
    const result = await graphql(`
        {
            allProjectsJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);
    if (result.error) {
        reporter.panic('There was a problem making pages.')
    }
    const projects = result.data.allProjectsJson.edges;

    projects.forEach(({ node: { slug } }) => {
        actions.createPage({
            path: `/projects/${slug}`,
            component: require.resolve('./src/pages/projects/ProjectLayout.js'),
            context: { slug }
        });
    });
};
