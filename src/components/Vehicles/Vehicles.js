import React, { Component } from "react"
import axios from "axios"

import VehicleCard from "../VehicleCard/VehicleCard"

class Vehicles extends Component {
  constructor() {
    super()

    this.state = {
      vehicleData: []
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/vehicles").then(res => {
      this.setState({
        vehicleData: res.data.results
      })
      // .catch(err => {
      //   console.log("bummer error: ", err)
      // })
    })
  }

  render() {
    return (
      <>
        <VehicleCard vehicleData={this.state.vehicleData} />
      </>
    )
  }
}

export default Vehicles