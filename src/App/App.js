import React, { Component } from 'react';
import './App.css';
import './normalize.css';

import CardWrapper from '../CardWrapper/CardWrapper'
import Search from '../Search/Search'

import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor () {
    super()
    this.districtRepo = new DistrictRepository(kinderData)
    this.state = {
      currentSearch: this.districtRepo.findAllMatches()
    }
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }
  render() {
    return (
      <div className='header'>
        <h1>Welcome To Headcount 2.0</h1>
        <Search repo={this.districtRepo} callback={this.handleSearchInput}/>
        <CardWrapper repo={this.districtRepo} displayTheseGuys={this.state.currentSearch}/>
      </div>
    )
  }

  handleSearchInput (input) {
    this.setState({ currentSearch: input })
  }
}

export default App;
