import React, { Component } from "react";
import CountryList from "./components/CountryList";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }

  searchCountry = (e) => {
    this.setState({ searchInput: e.target.value });
    
  };

  render() {
    return (
      <div className="container">
        <center>
          <h1>Country Filter</h1>
        </center>
        <Search searchCountry={this.searchCountry} />
        <CountryList {...this.state} />
      </div>
    );
  }
}

export default App;
