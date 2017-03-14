import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


const CardWrapper = ({ data }) => {
  const district = new DistrictRepository(kinderData);

  return (
    <div>
      <DistrictCard districtData={district.findByName('ADAMS COUNTY 14')} />
    </div>
  )
}

export default CardWrapper;
