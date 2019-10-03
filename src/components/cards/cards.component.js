import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./cards.component.scss"

class Cards extends React.Component {

  render() {
    const { cards } = this.props

    return (
      <section className="flex flex-col justify-center">
        <div className="container">
          {cards.length > 0 && <div className="cards">
            {cards.map(({ title, link }, i) => 
              <div className="cards__item" key={i}>
              {link && <Link to={link}>
                {title}
              </Link>}

              {!link && <>{title}</>}
              </div>
            )}
          </div>}
        </div>
      </section>
    )
  }
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  )
}

Cards.defaultProps = {
  cards: []
}

export default Cards

