import React from "react"
import ReactModal from "react-modal"
import { navigate } from "gatsby"

ReactModal.setAppElement(`#___gatsby`) // necessary for screen-readers

const classes = {
  overlayClassName: {
    base: `ReactModal__Overlay`,
    afterOpen: `ReactModal__Overlay--after-open`,
    beforeClose: `ReactModal__Overlay--before-close`
  },
  className: {
    base: `ReactModal__Content`,
    afterOpen: `ReactModal__Content--after-open`,
    beforeClose: `ReactModal__Content--before-close`
  },
  bodyOpenClassName: `ReactModal__Body--open`
}

const cssVariables = {
  '--close-timeout': 660
}

class Modal extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      scrollPositionOnModalOpen: window.scrollY
    };
  }

  componentDidMount() {
    this.setState({
      showModal: true
    })
  }

  hideModal(event) {
    const { scrollPositionOnModalOpen } = this.state

    this.setState({
      showModal: false
    })

    navigate(`/`, { replace: true })

    window.scrollTo(0, scrollPositionOnModalOpen)
  }

  render() {
    const { children } = this.props
    const { showModal } = this.state

    return (
      <ReactModal
        style={cssVariables}
        isOpen={showModal}
        onRequestClose={(e) => this.hideModal(e)}
        closeTimeoutMS={cssVariables['--close-timeout']}
        {...classes}>
        <div className="container">
          {children}
        </div>
      </ReactModal>
    )
  }
}

export default Modal