import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from "../components/display"

const IndexPage = ({ isImprintCollapsed }) => {
  const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          displayTitle,
          displaySubtitle
        }
      }
    }
  `)
  const { site } = data
  const { siteMetadata } = site

  return (
    <Layout isImprintCollapsed={isImprintCollapsed}>
      <SEO title="Home" />
      <Display {...siteMetadata} />
      <section id="anchore" className="flex flex-col justify-center">
        <div className="text-center">
          <em>Come back later.... right now there's nothing to see!</em>
        </div>
      </section>
    </Layout>
  )
}

IndexPage.propTypes = {
  isImprintCollapsed: PropTypes.bool
}

IndexPage.defaultProps = {
  isImprintCollapsed: true
}

export default IndexPage
