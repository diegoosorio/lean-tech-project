import React from 'react';
import "./styles/Route.css";

class Route extends React.Component {

  render() {
    return (
      <div className="Route">
        <div className="Route__check">
          <i class="fas fa-check-circle"></i>
        </div>
        <div className="Route__product">
          <div className="Date">
            {/* <p>{this.props.date}</p> */}
            <p>Monday <br/> 10<sup>th</sup> 2:28 <br/> PM</p>
          </div>
          <div className="Location">
            <div className="Location__icon">
              <i className="fas fa-location-arrow"></i>
            </div>
            <div className="Location__angle">
              <p>Houston, TX, 33619</p>
              <i className="fas fa-angle-down"></i>
              <p>Atlanta, GA, 30123</p>
            </div>
          </div>
          <div className="Service__price">
            <i className="fas fa-truck fa-flip-horizontal"></i>
            <p>$250.00</p>
            <div className="Quantity">1</div>
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    ) 
  }

}

export default Route;