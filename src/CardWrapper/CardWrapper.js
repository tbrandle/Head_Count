import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';


const CardWrapper = ({ data }) => {
  return (
    <div>
      <DistrictCard location='Colorado' data={{"2004": 0.302, "2005": 0.267, "2006": 0.354, "2007": 0.392, "2008": 0.385, "2009": 0.39, "2010": 0.436, "2011": 0.489, "2012": 0.479, "2013": 0.488, "2014": 0.49}} />
    </div>
  )
}

export default CardWrapper;
