import React from 'react';
import { shallow, mount } from 'enzyme';

import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

import Comparison from './Comparison'

describe('Comparison Component', () =>  {
  const fakeCard = {location: 'north pole', data: {'2001': 0.5}}

  test('will display only one card if only given one card', () => {
    const wrapper = mount(<Comparison card1={fakeCard} card2={undefined}/>)
    expect(wrapper.find('.district-card').length).toBe(1);
  });

  test('will display two card and comparison if only given two cards', () => {
    const repo = new DistrictRepository(kinderData)
    const wrapper = mount(<Comparison repo={repo} card1={repo.findByName('Colorado')} card2={repo.findByName('ACADEMY 20')}/>)
    expect(wrapper.find('.district-card').length).toBe(2);
    expect(wrapper.find('.compare-card').length).toBe(1)
  });

});