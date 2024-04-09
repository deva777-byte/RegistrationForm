import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    onBlurForFirstName: false,
    onBlurForLastName: false,
    submitButtonClicked: false,
  }

  firstNameChanged = event => {
    this.setState({firstName: event.target.value})
  }

  lastNameChanged = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState(prevState => ({
        onBlurForFirstName: true,
        onBlurForLastName: true,
      }))
    } else if (firstName === '') {
      this.setState(prevState => ({
        onBlurForFirstName: true,
        onBlurForLastName: false,
      }))
    } else if (lastName === '') {
      this.setState(prevState => ({
        onBlurForLastName: true,
        onBlurForFirstName: false,
      }))
    } else {
      this.setState({submitButtonClicked: true})
    }
  }

  onBlur1 = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState(prevState => ({
        onBlurForFirstName: true,
      }))
    } else {
      this.setState(prevState => ({
        onBlurForFirstName: false,
      }))
    }
  }

  onBlur2 = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState(prevState => ({
        onBlurForLastName: true,
      }))
    } else {
      this.setState(prevState => ({
        onBlurForLastName: false,
      }))
    }
  }

  anotherResponse = event => {
    event.preventDefault()
    this.setState({submitButtonClicked: false, firstName: '', lastName: ''})
  }

  render() {
    const {
      onBlurForFirstName,
      onBlurForLastName,
      submitButtonClicked,
    } = this.state
    const inputClass1 = onBlurForFirstName ? 'input-border' : 'input'
    const inputClass2 = onBlurForLastName ? 'input-border' : 'input'

    return (
      <div className="bg">
        {submitButtonClicked === false ? (
          <div className="props">
            <h1 className="title">Registration Form</h1>
            <div className="inner">
              <form className="container" onSubmit={this.onSubmit}>
                <div className="input-container">
                  <label className="input-label" htmlFor="first_name">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    onChange={this.firstNameChanged}
                    className={inputClass1}
                    id="first_name"
                    placeholder="First name"
                    onBlur={this.onBlur1}
                  />
                  {onBlurForFirstName ? (
                    <label className="blur" htmlFor="first_name">
                      Required
                    </label>
                  ) : null}
                </div>
                <div className="input-container">
                  <label className="input-label" htmlFor="last_name">
                    LAST NAME
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    className={inputClass2}
                    onChange={this.lastNameChanged}
                    placeholder="Last name"
                    onBlur={this.onBlur2}
                  />
                  {onBlurForLastName ? (
                    <label className="blur" htmlFor="last_name">
                      Required
                    </label>
                  ) : null}
                </div>
                <div className="button-container">
                  <button type="submit" className="button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="props">
            <h1 className="title">Registration Form</h1>
            <div className="inner">
              <div className="container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                  className="success-icon"
                  alt="success"
                />
                <h1 className="text">Submitted Successfully</h1>
                <button
                  className="button2"
                  type="submit"
                  onClick={this.anotherResponse}
                >
                  Submit Another Response
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
