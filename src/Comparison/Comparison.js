import React, { Component } from 'react';

class Comparison extends Component {
  constructor () {
    super()
  }

  render () {
    // return <div> hey </div>
    if (this.props.card1 && !this.props.card2) {
      return (
        this.props.card1
      )
    } else if (this.props.card1 && this.props.card2) {
      return (
        <div>
          {this.props.card1}
          <div> Comparision here </div>
          {this.props.card2}
        </div>
      )
    }

    return <div></div>

  }
}

export default Comparison;

