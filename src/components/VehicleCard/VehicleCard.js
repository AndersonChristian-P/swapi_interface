import React from "react"

const VehicleCard = (props) => {

  const vehicleCard = props.vehicleData.map((element, i) => {
    return (
      <div key={element.name} className="vehicle-card">
        <div className="vehicle-name">{element.name}</div>
        <div className="vehicle-model">model: {element.model}</div>
        <div className="vehicle-cost">cost: {element.cost_in_credits} credits</div>
      </div>
    )
  })
  return (
    <div className="vehicle-cards" >
      {vehicleCard}
    </div>
  )
}

export default VehicleCard