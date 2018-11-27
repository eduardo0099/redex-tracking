import React, { Component } from 'react';
import PropTypes from 'prop-types';
import airplaneImg from './../Images/airplane.png';
import checkImg from './../Images/check.png';

class CurrentStatus extends Component {
    render() {
        let data = this.props.currentState;
        return (
            <div className="container-situation">
                <h2 className="title-status">
                {data.active ? 
                    "¡Su paquete está listo para ser recogido!" 
                    : 
                    "¡Su paquete está en camino!" }
                </h2>
                <img src={data.active? checkImg : airplaneImg}
                     alt="Imagen del estado"
                     width={150}
                     height={150}
                     className="img-status"                     
                />
                <div className="table-info-status">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Ubicación actual
                                </td>
                                <td>
                                    {data.currentLocation}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Destinatario
                                </td>
                                <td>
                                    {data.addressee}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

CurrentStatus.propTypes = {
    currentState: PropTypes.any.isRequired,
};

export default CurrentStatus;