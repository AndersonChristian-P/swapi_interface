import React from "react"

const PlanetCard = (props) => {
  const planetCard = props.planetData.map((element, i) => {
    return (
      <div key={element.name} className="planet-card" >
        <div className="planet-name" >{element.name}</div>
        <div className="planet-climate" >Climate: {element.climate}</div>
        <div className="planet-gravity" >Gravity: {element.gravity}</div>
        <div className="planet-population" >Population: {element.population}</div>
      </div>
    )
  })

  return (
    <div className="planet-cards" >
      {planetCard}
    </div>
  )
}

export default PlanetCard