import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

// import DistrictRepository from '../helper.js';
// import kinderData from '../../data/kindergartners_in_full_day_program.js';


const CardWrapper = ({ repo }) => {
  // const district = new DistrictRepository(kinderData);
  const allDistricts = repo.findAllMatches()
  // serchresults = district.findAllMatches('string from search componenet')

  return (
    <div className='card-wrapper'>
      {
        allDistricts.map((location, i) => {
          return <DistrictCard key={i} className='card' districtData={repo.findByName(location)} />
        })
      }
    </div>
  )
}

export default CardWrapper;
