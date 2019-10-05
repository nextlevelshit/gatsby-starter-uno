/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { kebabCase } = require('lodash')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const { frontmatter } = node
    const { title } = frontmatter

    const slug = kebabCase(title)
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await Promise.all([
    createMarkdownPages({ createPage, graphql })
  ])
}

createMarkdownPages = ({ createPage, graphql }) => {
  const modalMarkdownTemplate = path.resolve('src/templates/modal.template.js')

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(filter: {frontmatter: {modal: {eq: true}}}) {
              nodes {
                frontmatter {
                  title
                }
                fields {
                  slug
                }
                html
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allMarkdownRemark.nodes.forEach(({ frontmatter, fields, html }) => {
          const { title } = frontmatter
          const { slug } = fields

          createPage({
            path: slug,
            component: modalMarkdownTemplate,
            context: {
              slug,
              title
            },
          })
        })
      })
    )
  })
}