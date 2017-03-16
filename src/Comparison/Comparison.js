import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

import './Comparison.css';

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
          <div className='compare-card'>
            <h3 className="location">{ this.props.card1.location }</h3>
            <p className="location-average">{ compareObject[this.props.card1.location] }</p>
            <p className="average-compare">-- { compareObject.compared } --</p>
            <h3 className="location">{ this.props.card2.location }</h3>
            <p className="location-average">{ compareObject[this.props.card2.location] }</p>
          </div>
          <DistrictCard districtData={this.props.card2}/>
          <button onClick={ ()=>this.props.clearSelection() } type='submit' value='clear'>clear</button>
        </div>
      )
    }
    return <div> </div>

  }
}

export default Comparison;
