import React from 'react';
import "./styles/Route.css";
import Check from './Check';

class Route extends React.Component {
  render() {
    return (
      <div className="Route">
        {
          this.props.isCheck === "true"
          ? <Check />
          : null
        }
        <div className="Route__product">
          <div className="Date">
            <p>Monday <br/> 10<sup>th</sup> 2:28 <br/> PM</p>
          </div>
          <div className="Location">
            <div className="Location__icon">
              <i className="fas fa-location-arrow"></i>
            </div>
            <div className="Location__angle">
              <p>{this.props.route.origin}</p>
              <i className="fas fa-angle-down"></i>
              <p>{this.props.route.destiny}</p>
            </div>
          </div>
          <div className="Service__price">
            <i className="fas fa-truck fa-flip-horizontal"></i>
            <p>{this.props.route.price}</p>
            <div className="Quantity">{this.props.route.quantity}</div>
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    ) 
  }

}

export default Route;