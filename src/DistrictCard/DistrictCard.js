import React, { Component } from 'react';
import './DistrictCard.css';


class DistrictCard extends Component {
  render () {
    return (
      <div className='district-card' onClick={(e) => this.props.selectMe(this)}>
      <h3 className='title' >{this.props.districtData.location}</h3>
      <section className='data-section' >
      { Object.keys(this.props.districtData.data).map((key, i) => <p key={i}> { key } { this.props.districtData.data[key] } </p>) }
      </section>
      </div>
    )
  }
}


export default DistrictCard;
