import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom" 
import Home from "./components/Home/index"
import Actu from "./components/Actu/index"
import Detail from "./components/Detail/index"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/actu" component={Actu} exact/>
            <Route path="/detail" component={Detail}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
