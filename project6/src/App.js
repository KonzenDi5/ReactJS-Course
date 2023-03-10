import React, { Component } from "react";
import Feed from "./components/feed";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Matheus", curtidas: 10, comentarios: 1 },
        { id: 2, username: "Lucas", curtidas: 119, comentarios: 18 },
        { id: 3, username: "Amanda", curtidas: 230, comentarios: 12 },
        { id: 4, username: "Ricardo", curtidas: 1, comentarios: 0 }
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
           <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
          );
        })}
      </div>
    );
  }
}

export default App;
