import React, { Component } from "react"
import axios from "axios"

import PeopleCard from "../PeopleCard/PeopleCard"

class People extends Component {
  constructor() {
    super()
    this.state = {
      peopleData: []
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/").then(res => {
      this.setState({
        peopleData: res.data.results
      })
    })
    // .catch(err => {
    //   console.log("bummer error: ", err)
    // })
  }

  render() {
    return (
      <>
        <PeopleCard peopleData={this.state.peopleData} />
      </>
    )
  }
}

export default People