import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPlace from './CardPlace';
import CurrentStatus from './CurrentStatus';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
  Markers
} from "react-simple-maps";
import map from "./../files/world-50m-simplified.json";
import {Col} from 'antd';

class DetailsStatus extends Component {

    buildCurves(start, end, line) {
        const x0 = start[0];
        const x1 = end[0];
        const y0 = start[1];
        const y1 = end[1];
        const curve = {
          forceUp: `${x1} ${y0}`,
          forceDown: `${x0} ${y1}`
        }[line.curveStyle];
      
        return `M ${start.join(' ')} Q ${curve} ${end.join(' ')}`;
      }
      
    render() {
        let data = this.props.details;
        let currentState = this.props.currentState;
        
        return (
            <div className="container-details">
                <Col span={12}>
                <div className="list-places">
                    {data.map((item,index) => {
                        return <CardPlace key={index} item={item}/>
                    })}
                </div>
                </Col>
                <Col span={12}>
                <CurrentStatus currentState={currentState}/>
                </Col>
            </div>
        );
    }
}

DetailsStatus.propTypes = {
    details: PropTypes.any.isRequired
};

export default DetailsStatus;