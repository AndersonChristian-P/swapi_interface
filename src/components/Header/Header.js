import React from "react"

import ScrollText from "../ScrollText/ScrollText"

const Header = () => {
  return (
    <>

      <div className="page-title" >
        <p>SWAPI</p>
      </div>

      <div className="scrolling-text" >
        <ScrollText />
      </div>

    </>
  )
}


export default Header