import React, { Component } from "react"
import axios from "axios"

import PlanetCard from "../PlanetCard/PlanetCard"

class Planets extends Component {
  constructor() {
    super()
    this.state = {
      planetData: []
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/planets/").then(res => {
      this.setState({
        planetData: res.data.results
      }).catch(err => {
        console.log("bummer error: ", err)
      })
    })
  }

  render() {
    return (
      <>
        <PlanetCard planetData={this.state.planetData} />
      </>
    )
  }
}

export default Planets