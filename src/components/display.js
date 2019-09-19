import PropTypes from "prop-types"
import React from "react"
import ImageMap from "./image-map"

const Display = ({ authorName, authorProfession }) => (
  <section class="first-impression">
    <ImageMap />
    <div class="container">
      <div class="display" id="display">
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