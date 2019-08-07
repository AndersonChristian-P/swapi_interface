import React from "react"

const PeopleCard = (props) => {
  const peopleCard = props.peopleData.map((element, i) => {
    return (
      <div key={element.name} className="people-card" >
        <div className="person-name" >{element.name}</div>
        <div className="person-birth-year" >Birth Year: {element.birth_year}</div>
      </div>
    )
  })

  return (
    <div className="people-cards" >
      {peopleCard}
    </div>
  )
}

export default PeopleCard