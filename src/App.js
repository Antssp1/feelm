import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom" 
import Home from "./components/Home/Home"
import Actu from "./components/Actu/Actu"
import Detail from "./components/Detail/Detail"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/actu" component={Actu}/>
            <Route path="/detail" component={Detail}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
