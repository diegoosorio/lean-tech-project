import React from 'react';
import './styles/App.css';
import Route from './Route';
import Menu from './Menu';
import Search from './Search';
import Check from './Check';
import logo from '../images/logo.png';

class App extends React.Component {
  state = {
    route: {
      origin: "Houston, TX, 33619",
      destiny: "Atlanta, GA, 30123",
      price: "$250.00",
      quantity: "1",
    },
  }

  render(){
    return (
      <div className="App">
        <div className="Left__side">
          <div className="Logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="Smart__filters">
            Smart filters
            <Search isCheck="false"/>
          </div>
        </div>
        <div className="Right__side">
          <div className="Right__container">
            <Menu/>
            <Search className="Search" isCheck="true"/>
            <Route isCheck="true" route={this.state.route}/>
            <Route isCheck="true" route={this.state.route}/>
            <Route isCheck="true" route={this.state.route}/>
          </div>
        </div>
        <div className="Add">
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>
    )
  }
}

export default App;