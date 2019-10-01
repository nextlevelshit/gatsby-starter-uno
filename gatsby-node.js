/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// exports.onCreateNode = ({ node, getNodesByType, actions }) => {
//   const {
//     createNodeField,
//     createParentChildLink
//   } = actions

//   const markdownNodes = getNodesByType(`MarkdownRemark`)

//   console.log(markdownNodes)

//   // if (node.internal.type === `MarkdownRemark` && _.has(node, `frontmatter`) && _.has(node.frontmatter, `title`)) {
//   //   createNodeField({ 
//   //     node, 
//   //     name: `slug`,
//   //     value: slugify(node.frontmatter.title) 
//   //   })
//   // }
// }
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await Promise.all([
    createMarkdownPages({ createPage, graphql })
  ])
}

createMarkdownPages = () => {
  
}