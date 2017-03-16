import React, { Component } from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';
import Comparison from '../Comparison/Comparison';

import './CardWrapper.css';


class CardWrapper extends Component {
  constructor () {
    super()
    this.state = {
      card1: undefined,
      card2: undefined
    }

    this.handleCardSelect = this.handleCardSelect.bind(this)
  }

  render () {
    return (
      <div className='card-wrapper'>
      <Comparison card1={this.state.card1} card2={this.state.card2} repo={this.props.repo}/>
      {
        this.props.displayTheseGuys.map((location, i) => {
          return <DistrictCard
                    key={i}
                    className='card'
                    selectMe={this.handleCardSelect}
                    districtData={this.props.repo.findByName(location)} />
        })
      }
      </div>
  )}

  handleCardSelect (card) {
    !this.state.card1
      ? this.setState({card1: card.props.districtData})
      : this.setState({card2: card.props.districtData})
  }
}

export default CardWrapper;

// <Comparison card1={this.state.card1} card2={this.state.card2} repo={repo}/>
