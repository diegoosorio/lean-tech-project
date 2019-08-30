import React from 'react';
import './styles/Search.css';
import './Check';
import Check from './Check';

class Search extends React.Component {
  render(){
    return(
      <div className="Search">
        {
          this.props.isCheck === "true"
          ? <Check/>
          : null
        }
        <div className="Search__input">
          <input type="text" placeholder="Search" name="search"/>
        </div>
      </div>
    )
  }
}

export default Search;