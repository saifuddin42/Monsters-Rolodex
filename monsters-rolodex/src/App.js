// import React, { Component } from "react";
import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";

// class App extends Component {
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => console.log(users)) // gets the users from the url, converts to json then logs in the console
  // }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users })); // gets the users from the url, converts to json then sets state
  }

  render() {
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    // OR
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        {/* <input
          type="search"
          placeholder="Search Monsters"
          onChange={(e) => console.log(e.target.value)}
        /> */}
        {/* <input
          type="search"
          placeholder="Search Monsters"
          onChange={(e) =>
            this.setState({ searchField: e.target.value }, () =>
              console.log(e.target.value)
            )
          }
        /> */}
        <input
          type="search"
          placeholder="Search Monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p> {this.state.string} </p>
  //         <button onClick={() => this.setState({ string: "State Set" })}>
  //           Change Text
  //         </button>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
