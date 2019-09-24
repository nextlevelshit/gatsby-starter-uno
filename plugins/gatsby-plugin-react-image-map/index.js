import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class ImageMap extends React.Component {

  constructor(props) {
    super(props)

    const { nodes } = props

    this.state = { 
      active: Math.floor(Math.random() * nodes.length)
    }
  }

  render() {
    const { nodes, itemClass, activeClass } = this.props
    const { active } = this.state

    return (
      <>
        {nodes.length > 0 && nodes.map(({ childImageSharp }, i) => {
          const { fluid } = childImageSharp
          const className = i === active ? `${itemClass} ${activeClass}` : itemClass

          return (
            <div className={className} key={i}>
              <Img fluid={fluid} />
            </div>
          )
        })}
      </>
    )
  }
}

ImageMap.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired
      })
    })
  ),
  // options:  PropTypes.shape({
    activeClass: PropTypes.string,
    itemClass: PropTypes.string
  // })
}

ImageMap.defaultProps = {
  nodes: [],
  activeClass: `--active`,
  itemClass: ``
}

export default ImageMap