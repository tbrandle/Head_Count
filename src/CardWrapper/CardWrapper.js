import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

import './CardWrapper.css';


const CardWrapper = ({ repo, displayTheseGuys } ) => {
  return (
    <div className='card-wrapper'>
      {
        displayTheseGuys.map((location, i) => {
          return <DistrictCard key={i} className='card' districtData={repo.findByName(location)} />
        })
      }
    </div>
  )
}

export default CardWrapper;
