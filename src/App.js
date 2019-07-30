import React from 'react'
import { HashRouter } from "react-router-dom"

import './App.scss'
import router from "./router"
import Header from "./components/Header/Header"

function App() {

  return (
    <HashRouter >
      <Header />
      {router}
    </HashRouter >
  )
}

export default App;
