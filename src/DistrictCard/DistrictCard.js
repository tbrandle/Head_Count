import React, { Component } from 'react';

const DistrictCard = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.districtData.location}</h1>
        <section>
          { Object.keys(props.districtData.data).map((key, i) => <p key={i}> { key } { props.districtData.data[key] } </p>) }
        </section>
    </div>
  )
}


export default DistrictCard;
