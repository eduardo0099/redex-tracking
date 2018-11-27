import React from 'react';
import PropTypes from 'prop-types';

const CardPlace = props => {
    let item = props.item;
    let date = new Date(item.time);
    return (
        <div className={item.active? "card card-active" : "card"}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {item.title}
                        </td>
                        <td>
                            {date.toLocaleString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {item.subTitle}
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