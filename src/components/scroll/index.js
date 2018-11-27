import React from "react";
import "./index.css";
import Gif from "./giffy.gif";
import ListFilm from "../List-film/index"

class Layout extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      items: 10,
      loadingState: false,
      totalItem:[]
    };
  }

  handleScroll(ev){
    const elem = ev.target;
      if (elem.scrollTop + elem.clientHeight >= elem.scrollHeight){
        this.loadMoreItems();
      }
  }

  displayItems() {
    var items = [];
    for (var i = 0; i < this.state.items; i++) {
      items.push(<ListFilm key={i} />);
    }
    return items;
  }

  loadMoreItems() {
    this.setState({ loadingState: true });
    setTimeout(() => {
      this.setState({ items: this.state.items + 10, loadingState: false });
    }, 2000);
  }

  render() {
    return (
      <div className="list-container" >
        <ul className="scoll-list" onScroll={(ev) => this.handleScroll(ev)}>
          {this.displayItems()}
        </ul>

        {this.state.loadingState ? <img className="chargement" src={Gif}></img> : ""}
        

      </div>
    );
  }
}

export default Layout;