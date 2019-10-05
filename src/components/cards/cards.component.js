import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ScrollCards from "./../../../plugins/gatsby-plugin-react-scroll-cards"

import "./cards.component.scss"

const Cards = () =>  {
  const data = useStaticQuery(graphql`
    query CardsMarkdownQuery {
      allMarkdownRemark(filter: {frontmatter: {modal: {eq: true}}}) {
        nodes {
          frontmatter {
            title
            modal
          }
          html
        } 
      }
    }
  `)

  return (
    <>
      <ScrollCards {...data.allMarkdownRemark} />
    </>
  )
}

export default Cards

