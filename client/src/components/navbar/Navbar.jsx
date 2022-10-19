import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const logout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">iBook</span>
        </Link>
        {user ? (
          <>
            <div>
              <FontAwesomeIcon
                icon={faUserTie}
                style={{ marginRight: "7px", marginBottom: "2px" }}
              />
              <h5 style={{ display: "inline" }}>{user.username}</h5>
            </div>
            <div className="navLogout">
              <button className="navButton" onClick={logout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="navItems">
            <button className="navButton">
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "initial" }}
              >
                Register
              </Link>
            </button>
            <button className="navButton">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "initial" }}
              >
                Login
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
