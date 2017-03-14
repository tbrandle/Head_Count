import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


const Search = ({ data }) => {
  const district = new DistrictRepository(kinderData);

  //take input, try to find input in availible data. display what's found
  return (
    <div className='search'>
      <input type="text" />
    </div>
  )
}

export default Search;


// <input type="submit" />
