import React from "react"
import { Switch, Route } from "react-router-dom"

import People from "./components/People/People"
import Planets from "./components/Planets/Planets"
import Vehicles from "./components/Vehicles/Vehicles"
import App from "./App"

export default (
  < Switch >
    <Route exact path="/" component={App} />
    <Route path="/people" component={People} />
    <Route path="/planets" component={Planets} />
    <Route path="/vehicles" component={Vehicles} />
  </Switch >
)