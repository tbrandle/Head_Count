import React from 'react';
import './DistrictCard.css';


const checkPercentage = (districtData, key) => {
  if (districtData.data[key] < .50) {
    return 'percentage-low'
  } else {
    return 'percentage-high'
  }
}

const DistrictCard = ({ districtData, selectMe }) => {

    return (
      <div className='district-card' onClick={(e) => selectMe( districtData )}>
        <h3 className='title' >{districtData.location}</h3>
        <section className='data-section' >
        { Object.keys(districtData.data).map((key, i) =>
          <p className={ checkPercentage(districtData, key) } key={i}> { key } { districtData.data[key] } </p>
        )}
        </section>
      </div>
    )

}


export default DistrictCard;
