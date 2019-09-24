import React from "react"
import PropTypes from "prop-types"

class Cards extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {

    const { cards } = this.props

    return (
      <section className="flex flex-col justify-center">
        <div className="container">
          {cards.length > 0 && <div className="cards">
            {cards.map(({ title }, i) => 
              <div className="cards__item" key={i}>{title}</div>
            )}
          </div>}
        </div>
      </section>
    )
  }
}

Cards.propTypes = {
  cards: PropTypes.array
}

Cards.defaultProps = {
  cards: []
}

export default Cards

