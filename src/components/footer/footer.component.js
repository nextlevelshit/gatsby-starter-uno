import PropTypes from "prop-types"
import React from "react"

import "./footer.component.scss"

const Footer = ({ 
  title,
  authorInfo, 
  authorProfiles 
}) => (
  <footer>
    <div className="profiles">
      Contact:
      {authorProfiles && <ul>
        {authorProfiles.map(({ link, text }, i) =>
          <li key={i}>
            <a href={link}>
              {text}  
            </a>
          </li>
        )}
      </ul>}
    </div>
    <div className="copyright">
      {new Date().getFullYear()} © {authorInfo}
    </div>
  </footer>
)

Footer.propTypes = {
  title: PropTypes.string,
  authorInfo: PropTypes.string,
  authorProfiles: PropTypes.arrayOf(PropTypes.object),
}

Footer.defaultProps = {
  title: ``,
  authorInfo: ``,
  authorProfiles: []
}

export default Footer
