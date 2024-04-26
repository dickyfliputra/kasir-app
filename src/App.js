import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { NavbarComp } from "./component";
import { Home, Sukses } from "./pages";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <NavbarComp/>
      <main>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/Sukses" component={Sukses} exact/>
        </Switch>
      </main>
      </BrowserRouter>
    )
  }
}
