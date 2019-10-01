import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from "../components/display"
import Modal from "../components/modal"
import Cards from "../components/cards"

const IndexPage = ({ isImprintCollapsed, isModalOpen }) => {
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
      {isModalOpen && 
        <Modal>
          {/* {children} */}
          TEST
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
