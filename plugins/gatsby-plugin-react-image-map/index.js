import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class ImageMap extends React.Component {

  currentPosition = {
    x: -1,
    y: -1
  }

  constructor(props) {
    super(props)

    this.state = { 
      active: Math.floor(Math.random() * props.nodes.length)
    }
  }

  calculateDelta(clientX, clientY = 0) {   
    const { x , y } = this.currentPosition

    return Math.hypot((clientX - x), (clientY - y))
  }

  mouseMoved(e) {
    const { clientX, clientY } = e 
    const { threshold, nodes } = this.props
    const { active } = this.state
    const delta = this.calculateDelta(clientX, clientY)

    if(delta > threshold) {
      this.currentPosition = {
        x: clientX,
        y: clientY
      }

      this.setState({
        active: (active + 1) % nodes.length
      })
    }
  }

  render() {
    const { nodes, itemClass, activeClass } = this.props
    const { active } = this.state

    return (
      <div onMouseMove={this.mouseMoved.bind(this)}>
        {nodes.length > 0 && nodes.map(({ childImageSharp }, i) => {
          const { fluid } = childImageSharp
          const className = i === active ? `${itemClass} ${activeClass}` : itemClass

          return (
            <div className={className} key={i}>
              <Img fluid={fluid} />
            </div>
          )
        })}
      </div>
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
  activeClass: PropTypes.string,
  itemClass: PropTypes.string,
  threshold: PropTypes.number,
}

ImageMap.defaultProps = {
  nodes: [],
  activeClass: `--active`,
  itemClass: ``,
  threshold: 100
}

export default ImageMap