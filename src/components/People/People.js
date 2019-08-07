import React, { Component } from "react"
import axios from "axios"

import PeopleCard from "../PeopleCard/PeopleCard"

class People extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/").then(res => {
      this.setState({
        data: res.data.results
      })
    })
  }

  render() {
    return (
      <>
        <PeopleCard data={this.state.data} />
      </>
    )
  }
}

export default People