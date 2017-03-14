import React, { Component } from 'react';
import './DistrictCard.css';


const DistrictCard = (props) => {
  return (
    <div className='district-card'>
      <h3 className='title' >{props.districtData.location}</h3>
        <section className='data-section' >
          { Object.keys(props.districtData.data).map((key, i) => <p key={i}> { key } { props.districtData.data[key] } </p>) }
        </section>
    </div>
  )
}


export default DistrictCard;
