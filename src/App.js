import React, { Component } from "react";
import "./App.css";
import 'antd/dist/antd.css' 
import FirstPage from "./Component/FirstPage";
import SecondPage from "./Component/SecondPage";
import API from "./API";
import {notification} from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFirstPage: true,
      data: {}
    };
  }

  handleShowFirstPageChange = val => {
    if(val==""){
      notification.warning({
        message:"No ha ingresado el codigo del paquete"
      })
    }
    else{
      API.get("paquetes/tracking", { params: { trackNumber: val } }).then(
        response => {
          console.log("Data del paquete:",response.data);
          this.setState({
            showFirstPage: false,
            data: response.data
          });
          notification.success({
            message:"El codigo del paquete fue encontrado satisfactoriamente"
          })
        }).catch((error)=>{
          notification.error({
            message:"El codigo que ha ingresado no pertenece a ningun paquete registrado"
          })
        })
    }
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