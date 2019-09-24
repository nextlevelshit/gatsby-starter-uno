import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ImageMap from "./../../plugins/gatsby-plugin-react-image-map"

const ImageMapContainer = () => {
  const data = useStaticQuery(graphql`
    query ImageMapQuery {
      allFile(filter: {relativePath: {regex: "/image-map/"}}) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          relativePath
        }
      }
    }
  `)

  const { allFile } = data
  const { nodes } = allFile

  return (
    <div className="bg">
      <ImageMap nodes={nodes} itemClass={`bg__inner`}/>
    </div>
  )
}

export default ImageMapContainer