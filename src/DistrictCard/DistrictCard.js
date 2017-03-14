import React, { Component } from 'react';

class DistrictCard extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.location}</h1>
          <section>
            { Object.keys(this.props.data).map(key => <p> { key } { this.props.data[key] } </p>)}
          </section>
      </div>
    )
  }
}

export default DistrictCard;
