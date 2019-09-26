import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ImageMap from "./../../plugins/gatsby-plugin-react-image-map"

const ImageMapContainer = () => {
  const data = useStaticQuery(graphql`
    query ImageMapQuery {
      allFile(filter: {sourceInstanceName: {eq: "image-map"}}) {
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

  return (
    <div className="bg">
      <ImageMap {...data.allFile} itemClass={`bg__inner`}/>
    </div>
  )
}

export default ImageMapContainer