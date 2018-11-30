import React, { Component } from 'react';
import PropTypes from 'prop-types';
import airplaneImg from './../Images/airplane.png';
import checkImg from './../Images/check.png';
import almacenImg from './../Images/almae.jpg';

class CurrentStatus extends Component {
    render() {
        let data = this.props.currentState;
        console.log("estado",data);
        return (
            <div className="container-situation">
                {data.active === "EN_ALMACEN" ? 
                    <div>
                    <h2 className="title-status">¡Su paquete está en almacen!</h2>
                    <img src={almacenImg}
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
                    : 
                    null}
                {data.active === "EN_VUELO" ? 
                    <div>
                    <h2 className="title-status">¡Su paquete está vuelo!</h2>
                    <img src={airplaneImg}
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
                    : 
                    null}
                    {data.active === "ENTREGADO" ? 
                    <div>
                    <h2 className="title-status">¡Su paquete está listo para ser recogido!</h2>
                    <img src={checkImg}
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
                    : 
                    null}
                
            </div>
        );
    }
}

CurrentStatus.propTypes = {
    currentState: PropTypes.any.isRequired,
};

export default CurrentStatus;