import React from "react"
import { Switch, Route } from "react-router-dom"

import People from "./components/People/People"

export default (
  < Switch >
    <Route path="/people" component={People} />
    <Route path="/planets" />
    <Route path="/vehicles" />
  </Switch >
)