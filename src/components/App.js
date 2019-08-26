import React from 'react';
import './styles/App.css';
import Route from './Route';
import Menu from './Menu';
import Search from './Search';
import logo from '../images/logo.png';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="Left__side">
          <div className="Logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="Smart__filters">
            Smart filters
          </div>
        </div>
        <div className="Right__side">
          <div className="Right__container">
            <Menu/>
            <Search className="Search"/>
            <Route />
            <Route />
            <Route />
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