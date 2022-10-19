import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import "./login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
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
      const res = await axios.post("/auth/login", credentials)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })
      navigate("/")
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
          <h1>Login</h1>
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
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button disabled={loading} className="lButton" onClick={handleClick}>
            Login
          </button>
          <h5>
            doesn't have an account!{" "}
            <Link to="/register">click here to regsiter</Link>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Login
