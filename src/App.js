import React, { Component } from "react";
import "./App.css";
import FirstPage from "./Component/FirstPage";
import SecondPage from "./Component/SecondPage";
import API from "./API";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFirstPage: true,
      data: {}
    };
  }

  handleShowFirstPageChange = val => {
    API.get("paquetes/tracking", { params: { trackNumber: val } }).then(
      response => {
        console.log(response);
        this.setState({
          showFirstPage: false,
          data: val
        });
      }
    );
  };

  render() {
    return (
      <div className="main-container">
        {this.state.showFirstPage ? (
          <FirstPage handleSearch={this.handleShowFirstPageChange} />
        ) : (
          <SecondPage data={this.state.data} />
        )}
      </div>
    );
  }
}

export default App;
