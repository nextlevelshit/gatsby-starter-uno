/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Imprint from "./imprint"

const Layout = ({ children, isImprintCollapsed }) => {
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          authorEmail
          authorFullAdress,
          authorInfo, 
          authorPhone,
          authorProfiles {
            indicator
            link,
            text,
          },
          title,
        }
      }
    }
  `)
  const { site } = data
  const { siteMetadata } = site

  return (
    <main>
      <article>
        {children}
        <Imprint {...siteMetadata} isCollapsed={isImprintCollapsed} />
        <Footer {...siteMetadata} />
      </article>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isImprintCollapsed: PropTypes.bool
}

Layout.defaultProps = {
  children: {},
  isImprintCollapsed: true
}

export default Layout
