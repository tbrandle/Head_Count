import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

class Comparison extends Component {
  constructor () {
    super()
  }

  render () {
    if (this.props.card1 && !this.props.card2) {
      return (
        <DistrictCard districtData={this.props.card1}/>
      )
    } else if (this.props.card1 && this.props.card2) {
      return (
        <div>
          <DistrictCard districtData={this.props.card1}/>
          <div> Comparision here </div>
            <DistrictCard districtData={this.props.card2}/>
        </div>
      )
    }
    return <div> </div>

  }
}

export default Comparison;
