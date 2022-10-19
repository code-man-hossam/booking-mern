import "../login/login.css"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    country: undefined,
    phone: undefined,
    city: undefined,
    password: undefined,
  })

  const { loading, error, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post("/auth/register", credentials)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })
      navigate("/login")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
    }
  }

  return (
    <div className="login">
      <div className="container">
        <div className="loginHeader">
          <FontAwesomeIcon
            icon={faUserTie}
            style={{ fontSize: "3rem", color: "#fff" }}
          />
          <h1>Register</h1>
        </div>
        <div className="content">
          {error && (
            <span style={{ color: "#fff", fontSize: "medium" }}>
              {error.message}
            </span>
          )}
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            id="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="country"
            id="country"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="city"
            id="city"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="phone"
            id="phone"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
          <button disabled={loading} onClick={handleClick}>
            Register
          </button>
          <h5>
            already has an account! <Link to="/login">click here to login</Link>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Register
