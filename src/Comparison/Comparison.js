import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

class Comparison extends Component {
  constructor () {
    super()
  }

  // return <div> hey </div>
  // console.log(this.props.card1, ' heyo')
  render () {
    if (this.props.card1 && !this.props.card2) {
      return (
        <DistrictCard districtData={this.props.card1}/>
      )
    } else if (this.props.card1 && this.props.card2) {
      return (
        <div>
          <DistrictCard />
          <div> Comparision here </div>
          <DistrictCard />
        </div>
      )
    }
    return <div> </div>

  }
}

export default Comparison;








