import React from 'react';
import PropTypes from 'prop-types';

const CardPlace = props => {
    let item = props.item;
    let date = new Date(item.time);
    return (
        <div className={item.active? "card card-active" : "card"}>
            <table style={{width:"100%"}}>
                <tbody>
                    <tr>
                        <td>
                            {item.titulo}
                        </td>
                        <td style={{textAlign:"right"}}>
                            {item.fecha}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {item.descripcion}
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

CardPlace.propTypes = {
    item: PropTypes.any.isRequired
};

export default CardPlace;