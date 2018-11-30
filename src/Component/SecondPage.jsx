import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrentStatus from './CurrentStatus';
import DetailsStatus from './DetailsStatus';

class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            
        }
    }



    switchTag = (data) =>{
        let currentState ={
            active: false,
            currentLocation: data.localizacion,
            addressee: data.personaDestino
        }
        let details = {
            places:[
                {
                    active: false,
                    isLocation: false,
                    title: "Registrado",
                    subTitle: "Por: Perez Perez, Juan",
                    time: new Date().getTime(),
                },
                {
                    active: false,
                    isLocation: false,
                    title: "Esperando vuelo",
                    subTitle: "Ubicación: Lima, Perú",
                    time: new Date().getTime(),
                },
                {
                    active: true,
                    isLocation: true,
                    title: "En vuelo",
                    logitude: 41.66,
                    latitude: 35.45,
                    subTitle: "Destino: Ciuidad, País",
                    time: new Date().getTime(),
                },
                {
                    active: false,
                    isLocation: true,
                    logitude: 81.66,
                    latitude: 35.45,
                    title: "Esperando vuelo",
                    subTitle: "Ubicación: Lima, Perú",
                    time: new Date().getTime(),
                },
                {
                    active: false,
                    isLocation: false,
                    title: "En vuelo",
                    subTitle:  "Destino: Ciuidad, País",
                    time: new Date().getTime(),
                },
                {
                    active: false,
                    isLocation: false,
                    title: "En vuelo",
                    subTitle:  "Destino: Ciuidad, País",
                    time: new Date().getTime(),
                }
            ]
        }
        switch(this.state.tab){
            case 1:
                return <CurrentStatus currentState={currentState}/>
            case 2:
                return <DetailsStatus details={details}/>
            default:

        }
    }

    handleChangeTab= (val) =>{
        this.setState({
            tab: val
        });
    }

    render() {
        const {data}=this.props;

        return (
            <div className="layout">
                <h1>Paquete {data.codigoRastreo}</h1>
                <div>
                    <div>
                        <span className={this.state.tab === 1 ? "tab tab-selected" : "tab" } onClick={() => this.handleChangeTab(1)}>Situación actual</span>
                        <span className={this.state.tab === 2 ? "tab tab-selected" : "tab" } onClick={() => this.handleChangeTab(2)}>Detalle</span>
                    </div>
                    <div className="big-container">
                        {this.switchTag(data)}
                    </div>
                </div>
            </div>
        );
    }
}

SecondPage.propTypes = {
    data: PropTypes.any.isRequired
};

export default SecondPage;