import PropTypes from "prop-types"
import React from "react"
import ImageMapContainer from "./image-map-container"

const Display = ({ displayTitle, displaySubtitle }) => (
  <section className="first-impression">
    <ImageMapContainer />
    <div className="container">
      <div className="display" id="display">
        <h1>{displayTitle}</h1>
        <p>{displaySubtitle}</p>
      </div>
    </div>
  </section>
)

Display.propTypes = {
  displayTitle: PropTypes.string.isRequired,
  displaySubtitle:  PropTypes.string
}

Display.defaultProps = {
  displayTitle: ``,
  displaySubtitle: ``,
}

export default Display