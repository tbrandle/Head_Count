import React, { Component } from 'react';
import './App.css';

import CardWrapper from '../CardWrapper/CardWrapper'
import Search from '../Search/Search'

import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor () {
    super()
    this.districtRepo = new DistrictRepository(kinderData)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search />
        <CardWrapper repo={this.districtRepo}/>
      </div>
    );
  }

  handleSearchInput (search) {

  }
}

export default App;
