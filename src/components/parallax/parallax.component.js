import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Parallax as ReactParallax, ParallaxProvider as ReactParallaxProvider } from "react-scroll-parallax"

import "./parallax.component.scss"

const Parallax = () => {
  const maxY = 80

  const classNames = [
    `w-full lg:w-4/5 z-10`,
    `w-full lg:w-2/3 z-0`,
    `w-full lg:w-4/5 z-10`,
    `w-full lg:w-full z-0`,
  ]

  const data = useStaticQuery(graphql`
    query ParallaxImageQuery {
      allFile(filter: {sourceInstanceName: {eq: "parallax"}}) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          relativePath
        }
      }
    }
  `)

  const paragraphs = [
    <>
      <h2>The Panther</h2>
      <small>by Rainer Maria Rilke</small>
    </>,
    <p>
      From seeing the bars, his seeing is so exhausted<br/>
      That it no longer holds anything anymore.<br/>
      To him the world is bars, a hundred thousand<br/>
      Bars, and behind the bars, nothing.
    </p>,
    <p>
      The lithe swinging of that rhythmical easy stride<br/>
      Which circles down to the tiniest hub<br/>
      Is like a dance of energy around a point<br/>
      In which a great will stands stunned and numb.
    </p>,
    <p>
      Only at times the curtains of the pupil rise<br/>
      Without a sound…then a shape enters,<br/>
      Slips through the tightened silence of the shoulders,<br/>
      Reaches the heart, and dies.
    </p>
  ]

  const pickClassName = (i) => {
    return classNames[i % classNames.length]
  }

  const pickRandomY = () => {
    return Math.floor(Math.random() * maxY)
  }

  const { allFile } = data
  const { nodes } = allFile

  return (
    <section className="parallax">
        <div className="container">
          <ReactParallaxProvider>
            {nodes.map(({ childImageSharp }, i) => {
              const { fluid } = childImageSharp
              const widthClass = pickClassName(i)
              const alignClass = i % 2 === 0 ? `self-end` : ``

              return (
                <ReactParallax className={`${widthClass} ${alignClass}`} y={[0, pickRandomY()]} key={i}>
                  <div className="parallax-row">
                    <div className="parallax-row-image">
                        <Img fluid={fluid} />
                    </div>
                    <div className="parallax-row-text">
                      {paragraphs[i]}
                    </div>
                  </div>
                </ReactParallax>
              )
            })} 
          </ReactParallaxProvider>
        </div>
    </section>
  )
}

export default Parallax