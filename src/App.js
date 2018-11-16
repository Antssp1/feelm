import React, { Component } from 'react';
import './App.css';
import ButtonUp from "./Components/Button-up/index";


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lastOffset: 0,
      isVisible: false
    }
  }

  handleScroll(evt) {
    const offset = Math.round(window.pageYOffset)

    if (this.state.lastOffset !== offset) {
      if (this.state.lastOffset < offset) {
        this.setState({ isVisible: true, lastOffset: offset })
      }else{
        this.setState({ isVisible: false, lastOffset: offset })

      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (evt) => this.handleScroll(evt))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (evt) => this.handleScroll(evt))
  }

  render() {
    return (
      <div id="top" className="App" onScroll={(evt) => this.handleScroll(evt)}>
        <ButtonUp isVisible={this.state.isVisible} />
        
        <header className="App-header">
          <p>Liste films</p>
          <p>Liste films</p>
        </header>
        






      </div>
    );
  }
}

export default App;
