import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Imprint from "./imprint"
import "./../styles/index.scss"

const Layout = ({ children, isImprintCollapsed, isModal }) => {
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
  isImprintCollapsed: PropTypes.bool,
  isModal: PropTypes.bool,
}

Layout.defaultProps = {
  children: {},
  isImprintCollapsed: true,
  isModal: false
}

export default Layout
