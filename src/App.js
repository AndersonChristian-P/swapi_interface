import React, { Component } from 'react'
import { HashRouter } from "react-router-dom"

import './App.scss'
import router from "./router"

class App extends Component {
  constructor() {
    super()

    this.state = {
    }
  }


  render() {

    return (
      <HashRouter >
        <h1>Jello World!!!</h1>
        {router}
      </HashRouter >
    )

  }
}

export default App;
