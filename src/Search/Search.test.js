import Search from '../Search/Search';
import { shallow, mount } from 'enzyme'
import React from 'react';

import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Search tests', () =>  {
  const repo = new DistrictRepository(kinderData);

  test('renders an input field', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find('input').length).toBe(1)
  });

  test('trigger callback onChange', () => {
    let flag = false
    const testFun = () => flag = true
    const wrapper = shallow(<Search callback={testFun}/>)
    expect(wrapper.find('input').length).toBe(1)
  });

});