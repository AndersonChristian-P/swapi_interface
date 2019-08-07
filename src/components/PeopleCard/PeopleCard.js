import React from "react"

const Card = (props) => {
  const card = props.data.map((element, i) => {
    return (
      <div key={element.name} className="people-card" >
        <div className="person-name" >{element.name}</div>
        <div className="person-birth-year" >Birth Year: {element.birth_year}</div>
      </div>
    )
  })

  return (
    <div className="people-cards" >
      {card}
    </div>
  )
}

export default Card