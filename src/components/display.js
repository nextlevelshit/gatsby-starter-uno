import PropTypes from "prop-types"
import React from "react"
import ImageMap from "./image-map"

const Display = ({ authorName, authorProfession }) => (
  <section className="first-impression">
    <ImageMap />
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