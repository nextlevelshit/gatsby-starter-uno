import PropTypes from "prop-types"
import React from "react"

import ImageMapContainer from "./../image-map-container"
import "./display.component.scss"

const Display = ({ displayTitle, displaySubtitle }) => (
  <section className="display">
    <ImageMapContainer />
    <div className="container">
      <div className="display__inner" id="display">
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