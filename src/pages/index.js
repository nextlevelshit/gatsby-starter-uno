import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from "../components/display"
import Cards from "../components/cards"

const IndexPage = ({ isImprintCollapsed }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          displayTitle,
          displaySubtitle
        }
      },
      dataJson {
        cards {
          title,
          link
        }
      }
    }
  `)

  return (
    <Layout isImprintCollapsed={isImprintCollapsed}>
      <SEO title="Home" />
      <Display {...data.site.siteMetadata} />
      <Cards {...data.dataJson} />
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
