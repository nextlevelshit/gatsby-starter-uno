import PropTypes from "prop-types"
import React from "react"
import ImageMapContainer from "./image-map-container"

const Display = ({ authorName, authorProfession }) => (
  <section className="first-impression">
    <ImageMapContainer />
    <div className="container">
      <div className="display" id="display">
        <h1>{authorName}</h1>
        <p>{authorProfession}</p>
      </div>
    </div>
  </section>
)

Display.propTypes = {
  authorName: PropTypes.string,
  authorProfession:  PropTypes.string
}

Display.defaultProps = {
  authorName: ``,
  authorProfession: ``,
}

export default Display