import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPlace from './CardPlace';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
  Markers
} from "react-simple-maps";
import map from "./../files/world-50m-simplified.json";

class DetailsStatus extends Component {
    render() {
        let data = this.props.details;
        return (
            <div className="container-details">
                <div className="list-places">
                    {data.places.map((item,index) => {
                        return <CardPlace key={index} item={item}/>
                    })}
                </div>
                <div className="map">
                    <ComposableMap
                        className="graphic-map"
                        projectionConfig={{
                            scale: 165,
                            rotation: [-10,0,0],
                        }}
                    >
                        <ZoomableGroup>
                            <Geographies geography={map}>
                                {(geographies, projection) => geographies.map((geography,idx) => (
                                <Geography
                                    key={idx}
                                    geography={ geography }
                                    projection={ projection }
                                    style={{
                                        default: {
                                            fill: '#ECEFF1',
                                            stroke: "#607D8B",
                                            strokeWidth: 0.75,
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: '#607D8B',
                                            stroke: "#607D8B",
                                            strokeWidth: 0.75,
                                            outline: "none",
                                        },
                                        pressed: {
                                            fill: '#ECEFF1',
                                            stroke: "#607D8B",
                                            strokeWidth: 0.75,
                                            outline: "none",
                                        }
                                    }}
                                    />
                                ))}
                            </Geographies>
                            <Markers>
                                {data.places.filter(e => e.isLocation).map((item,index)=>{
                                    return (
                                        <Marker
                                            key={index}
                                            marker={{
                                                coordinates: [item.logitude, item.latitude ] 
                                            }}
                                            style={{
                                                default: { fill: "#f15d14" },
                                                hover:   { fill: "#f15d14" },
                                                pressed: { fill: "#f15d14" },
                                            }}
                                        >
                                            <circle cx={ 0 } cy={ 0 } r={ 3 } />
                                        </Marker>
                                    );
                                })}
                            </Markers> 
                        </ZoomableGroup>
                    </ComposableMap>
                </div>
            </div>
        );
    }
}

DetailsStatus.propTypes = {
    details: PropTypes.any.isRequired
};

export default DetailsStatus;