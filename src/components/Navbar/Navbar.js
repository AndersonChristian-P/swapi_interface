import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar" >
      <Link to="/people" className="nav" >
        people
      </Link>
      <Link to="#" className="nav" >
        planets
      </Link>
      <Link to="#" className="nav" >
        vehicles
      </Link>
    </div>
  )
}

export default Navbar