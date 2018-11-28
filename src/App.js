import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom" 
import Home from "./Components/Home/index"
import Actu from "./Components/Actu/index"
import Detail from "./Components/Detail/index"

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
