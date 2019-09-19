// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ 
  title,
  authorInfo, 
  authorProfiles 
}) => (
  <footer>
    <div class="profiles">
      Contact:
      <ul>
        {authorProfiles.map(({ link, text }, i) =>
          <li key={i}>
            <a href={link}>
              {text}  
            </a>
          </li>
        )}
      </ul>
    </div>
    <div class="copyright">
      {new Date().getFullYear()} © {authorInfo}
    </div>
  </footer>
)

Footer.propTypes = {
  title: PropTypes.string,
  authorInfo: PropTypes.string,
  authorProfiles: PropTypes.arrayOf(
    PropTypes.string
  ),
}

Footer.defaultProps = {
  title: ``,
  authorInfo: ``,
  authorProfiles: []
}

export default Footer
