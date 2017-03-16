import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

import './Search.css';

const Search = ({ repo, callback }) => {
  return (
    <div className='search-div'>
      <input className='search' type="text" onChange={(e) => callback(repo.findAllMatches(e.target.value))}/>
      <input className='submit' type='image' src='https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-128.png' />

    </div>
  )
}

export default Search;
