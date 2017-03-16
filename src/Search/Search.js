import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

import './Search.css';

const Search = ({ repo, callback }) => {
  return (
    <div className='search'>
      <input type="text" onChange={(e) => callback(repo.findAllMatches(e.target.value))}/>
      <input className='submit'type='image' src='../search.svg' alt='Submit button' />
    </div>
  )
}

export default Search;
