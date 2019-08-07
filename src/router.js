import React from "react"
import { Switch, Route } from "react-router-dom"

import People from "./components/People/People"
import Planets from "./components/Planets/Planets"

export default (
  < Switch >
    <Route path="/people" component={People} />
    <Route path="/planets" component={Planets} />
    <Route path="/vehicles" />
  </Switch >
)