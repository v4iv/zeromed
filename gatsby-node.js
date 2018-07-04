/**
 * Created by vaibhav on 4/7/18
 */
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators

    return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            result.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(result.errors)
        }

        const pages = result.data.allMarkdownRemark.edges

        pages.forEach(edge => {
            const id = edge.node.id
            createPage({
                path: edge.node.fields.slug,
                component: path.resolve(
                    `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
                ),
                // additional data can be passed via context
                context: {
                    id,
                },
            })
        })
    })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
