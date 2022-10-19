import "./payment.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarAlt,
  faCreditCard,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const Payment = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    alert("Payment has been sent to iBook")
    navigate("/")
  }

  return (
    <div className="wrapper">
      <div className="payment">
        <div className="payment-logo">
          <p>p</p>
        </div>

        <h2>Payment Gateway</h2>
        <div className="form">
          <div className="card space icon-relative">
            <label className="label">Card holder:</label>
            <input type="text" className="input" placeholder="John Doe " />
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="card space icon-relative">
            <label className="label">Card number:</label>
            <input
              type="text"
              className="input"
              data-mask="0000 0000 0000 0000"
              placeholder="Card Number"
            />
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          <div className="card-grp space">
            <div className="card-item icon-relative">
              <label className="label">Expiry date:</label>
              <input
                type="text"
                name="expiry-data"
                className="input"
                placeholder="00 / 00"
              />
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <div className="card-item icon-relative">
              <label className="label">CVC:</label>
              <input
                type="text"
                className="input"
                data-mask="000"
                placeholder="000"
              />
              <FontAwesomeIcon icon={faLock} />
            </div>
          </div>

          <div className="btn" onClick={handleClick}>
            Pay
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
