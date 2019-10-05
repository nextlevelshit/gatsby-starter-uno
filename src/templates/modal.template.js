import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import IndexPage from "./../pages/index"

export default class ModalMarkdownTemplate extends React.Component {
  
  render() {

    const { data } = this.props
    const { markdownRemark } = data
    const { html } = markdownRemark

    return (
      <IndexPage isModalOpen={true}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </IndexPage>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ModalMarkdownQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      headings {
        value
        depth
      }
      frontmatter {
        title
      }
    }
  }
`

ModalMarkdownTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired
}