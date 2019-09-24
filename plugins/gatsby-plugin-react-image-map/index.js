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
    const { nodes, activeClass, imageStyle } = this.props
    const { active } = this.state

    return (
      <div onMouseMove={this.mouseMoved.bind(this)}>
        {nodes.length > 0 && nodes.map(({ childImageSharp }, i) => {
          const { fluid } = childImageSharp
          let { itemClass, itemStyle, activeStyle } = this.props

          if (i === active) {
            itemClass = ([activeClass, itemClass]).join(` `)
            itemStyle = {
              ...itemStyle,
              ...activeStyle
            }
          }
          

          return (
            <div className={itemClass} style={itemStyle} key={i}>
              <Img fluid={fluid} style={imageStyle} />
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
  activeStyle: PropTypes.object,
  itemClass: PropTypes.string,
  itemStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  threshold: PropTypes.number,
}

ImageMap.defaultProps = {
  nodes: [],
  activeClass: ``,
  activeStyle: {
    opacity: 1,
  },
  itemClass: ``,
  itemStyle: {
    position: `absolute`,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: `block`,
    opacity: 0,
    width: `100%`,
    height: `100%`,
  },
  imageStyle: {
    maxWidth: `100%`,
    maxHeight: `100vh`,
  },
  threshold: 100
}

export default ImageMap