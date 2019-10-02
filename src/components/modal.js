import React from "react"
import ReactModal from "react-modal"
import { navigate } from "gatsby"

/**
 * Necessary implementation for screen-readers. Read more:
 * http://reactcommunity.org/react-modal/examples/set_app_element.html
 */
ReactModal.setAppElement(`#___gatsby`)

class Modal extends React.Component {

  classes = {
    overlayClassName: {
      base: `modal__backdrop`,
      afterOpen: `modal__backdrop--after-open`
    },
    className: {
      base: `modal__inner`,
      afterOpen: `modal__inner--after-open`
    },
    bodyOpenClassName: `modal__body--open`
  }

  options = {
    closeTimeout: 660
  }
  
  cssVariables = {
    // Necessary CSS variable for modal transition
    //
    '--modal-transition-duration': `${this.options.closeTimeout}ms`,

    // Optional CSS variables to adjust modal behaviour
    //
    // '--modal-overlay-color': `255, 255, 255`,
    // '--modal-overlay-alpha': `0.9`,
    // '--modal-timing-function': `cubic-bezier(.86 ,0, .32, 1)`,
    // '--modal-body-shift': `-10vw`;
  }

  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    this.applyCssVariables()
    this.showModal()
  }

  componentWillUnmount() {
    this.removeCssVariables()
  }

  render() {
    const { children } = this.props
    const { showModal } = this.state
    const { closeTimeout } = this.options

    return (
      <ReactModal
        isOpen={showModal}
        onRequestClose={() => this.hideModal()}
        closeTimeoutMS={closeTimeout}
        {...this.classes}
      >
        <div className="container">
          {children}
        </div>
      </ReactModal>
    )
  }
  /**
   * Changes state to opened modal.
   */
  showModal() {
    this.setState({
      showModal: true
    })
  }
  /**
   * changes state to closed modal and navigates to the index page.
   */
  hideModal() {
    const { closeTimeout } = this.options
    const { bodyOpenClassName, className, overlayClassName } = this.classes

    document.body.classList.remove(bodyOpenClassName)
    document.querySelector(`.${className.base}`).classList.remove(className.afterOpen)
    document.querySelector(`.${overlayClassName.base}`).classList.remove(overlayClassName.afterOpen)

    setTimeout(() => {
      this.setState({
        showModal: false
      })
      navigate(`/`)
    }, closeTimeout)

    // 
  }
  /**
   * Applys all CSS Variables to the document so the stylesheet
   * can use certain variables required for the modal behaviour.
   */
  applyCssVariables() {
    Object.keys(this.cssVariables).forEach(key => {
      const value = this.cssVariables[key]
      return document.documentElement.style.setProperty(key, value)
    })
  }
  /**
   * Removes all CSS variables in order not to spoil the DOM unnecessarily.
   */
  removeCssVariables() {
    Object.keys(this.cssVariables).forEach(key => {
      const value = this.cssVariables[key]
      document.documentElement.style.removeProperty(key, value)
    }) 
  }
}

export default Modal