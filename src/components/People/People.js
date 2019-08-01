import React, { Component } from "react"
import axios from "axios"

import Card from "../Card/Card"

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
    // const card = this.state.people.map((person, i) => {
    //   console.log(person)
    //   return (
    //     <div key={person.name} className="people" >
    //       <h2>{person.name}</h2>
    //       <h2>{person.birth_year}</h2>
    //     </div>
    //   )
    // }
    // )

    return (
      <>
        {/* {card} */}
        <Card data={this.state.data} />
      </>
    )
  }
}

export default People