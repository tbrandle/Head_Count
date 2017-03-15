import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';
import Comparison from '../Comparison/Comparison';


import './CardWrapper.css';


class CardWrapper extends Component {
  constructor () {
    super()
    this.state = {
      card1: <div>this is a great card</div>,
      card2: <div>this is the second great card</div>
    }
  }

  render () {
    return (
      <div className='card-wrapper'>
      <Comparison card1={this.state.card1} card2={this.state.card2} repo={this.props.repo}/>
      {
        this.props.displayTheseGuys.map((location, i) => {
          return <DistrictCard key={i} className='card' districtData={this.props.repo.findByName(location)} />
        })
      }
      </div>
  )}
}

export default CardWrapper;

// <Comparison card1={this.state.card1} card2={this.state.card2} repo={repo}/>
