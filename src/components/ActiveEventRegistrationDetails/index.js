// Write your code here
import './index.css'

const Details = props => {
  const {isActiveDetails} = props
  const getDetails1 = () => (
    <div className="div1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="img1"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned! we will reopen the registrations soon!</p>
    </div>
  )
  const getDetails2 = () => (
    <div className="div1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="img1"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )
  const getDetails3 = () => (
    <div className="div1">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="img1"
        />
        <p>
          A live performance brings so much to your relationship with
          dance.seeing dance live can offen make you fall totally in love with
          this beautiful art form.
        </p>
        <button type="button" className="button2">
          Register Here
        </button>
      </div>
    </div>
  )

  const getDetails4 = () => (
    <div>
      <h1>Click on an event,to view its registration details</h1>
    </div>
  )

  const getDetails = () => {
    switch (isActiveDetails) {
      case 'REGISTRATIONS_CLOSED':
        return getDetails1()
      case 'REGISTERED':
        return getDetails2()
      case 'YET_TO_REGISTER':
        return getDetails3()
      default:
        return ''
    }
  }
  return <div>{getDetails()}</div>
}

export default Details
