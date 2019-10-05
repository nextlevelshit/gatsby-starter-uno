import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from "../components/display/display.component"
import Modal from "../components/modal/modal.component"
import Cards from "../components/cards/cards.component"

const IndexPage = ({ isImprintCollapsed, isModalOpen, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          displayTitle,
          displaySubtitle
        }
      }
    }
  `)

  return (
    <Layout isImprintCollapsed={isImprintCollapsed}>
      <SEO title="Home" />
      <Display {...data.site.siteMetadata} />
      <Cards />
      {isModalOpen && children && 
        <Modal>
          {children}
        </Modal>
      }
    </Layout>
  )
}

IndexPage.propTypes = {
  isImprintCollapsed: PropTypes.bool,
  isModalOpen: PropTypes.bool,
}

IndexPage.defaultProps = {
  isImprintCollapsed: true,
  isModalOpen: false
}

export default IndexPage
