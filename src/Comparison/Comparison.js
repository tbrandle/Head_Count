import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

import './Comparison.css';
import '../DistrictCard/DistrictCard.css';


class Comparison extends Component {
  constructor () {
    super()
  }

  render () {

    if (this.props.card1 && !this.props.card2) {
      return (
        <div className='comparison'>
          <DistrictCard districtData={this.props.card1}/>
        </div>

      )
    } else if (this.props.card1 && this.props.card2) {
      const compareObject = this.props.repo.compareDistrictAverages(this.props.card1.location, this.props.card2.location)
      return (
        <div className='comparison'>
          <DistrictCard districtData={this.props.card1}/>
          <div className='district-card'>
            { compareObject.compared }
            { this.props.card1.location }
            { compareObject[this.props.card1.location] }
            { this.props.card2.location }
            { compareObject[this.props.card2.location]}

          </div>
          <DistrictCard districtData={this.props.card2}/>
          <button type='submit' value='clear'>clear</button>
        </div>
      )
    }
    return <div> </div>

  }
}

export default Comparison;
