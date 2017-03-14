import React, { Component } from 'react';

const DistrictCard = (props) => {
  console.log(props)
  return (
    <div>
      <h1 className='title' >{props.districtData.location}</h1>
        <section className='data-section' >
          { Object.keys(props.districtData.data).map((key, i) => <p key={i}> { key } { props.districtData.data[key] } </p>) }
        </section>
    </div>
  )
}


export default DistrictCard;
