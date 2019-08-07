import React from "react"
import { Link } from "react-router-dom"

import ScrollText from "../ScrollText/ScrollText"

const Header = () => {
  return (
    <>

      <Link to="/App" >
        <div className="page-title" >
          <p>SWAPI</p>
        </div>
      </Link>

      <div className="scrolling-text" >
        <ScrollText />
      </div>

    </>
  )
}


export default Header