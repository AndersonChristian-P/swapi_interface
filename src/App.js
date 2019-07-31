import React from 'react'
import { HashRouter } from "react-router-dom"

import './App.scss'
import router from "./router"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <HashRouter >
      <Header />
      <Navbar />
      {router}
    </HashRouter >
  )
}

export default App;
