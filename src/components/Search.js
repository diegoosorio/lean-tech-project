import React from 'react';
import './styles/Search.css'

class Search extends React.Component {
  render(){
    return(
      <div className="Search">
        <div className="Search__check">
          <i class="fas fa-check-circle"></i>
        </div>
        <div className="Search__input">
          <input type="text" placeholder="Search" name="search"/>
        </div>
      </div>
    )
  }
}

export default Search;