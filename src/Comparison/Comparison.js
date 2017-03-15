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
      const compareObject = this.props.repo.compareDistrictAverages(this.props.card1.location, this.props.card2.location)
      return (
        <div>
          <DistrictCard districtData={this.props.card1}/>
          <div>
            { compareObject.compared }
            { this.props.card1.location }
            { compareObject[this.props.card1.location] }
            { this.props.card2.location }
            { compareObject[this.props.card2.location]}

          </div>
          <DistrictCard districtData={this.props.card2}/>
        </div>
      )
    }
    return <div> </div>

  }
}

export default Comparison;
