import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

import './Search.css';

const Search = ({ repo, callback }) => {
  return (
    <div className='search'>
      <input type="text" onChange={(e) => {
        callback(repo.findAllMatches(e.target.value))
      }}/>
    </div>
  )
}

export default Search;
