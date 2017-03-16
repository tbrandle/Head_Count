import DistrictCard from '../DistrictCard/DistrictCard'
import { shallow, mount } from 'enzyme'
import React from 'react';

import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictCard tests', () =>  {
  const district = new DistrictRepository(kinderData);
  const exampleData = district.findByName('Colorado')

  test('districtCard has class of district-card', () => {
    const wrapper = shallow(<DistrictCard districtData={exampleData} />)
    expect(wrapper.hasClass('district-card')).toBe(true);
  });

  test('card displays all data provided', () => {
    const wrapper = shallow(<DistrictCard districtData={exampleData} />)
    expect(wrapper.find('p').length).toBe(11);
  })

  test('card displays data below .5 as red, and above .5 as green', () => {
    const wrapper = shallow(<DistrictCard districtData={exampleData} />)
    expect(wrapper.find('p.percentage-low').length).toBe(4);
    expect(wrapper.find('p.percentage-high').length).toBe(7);
  })

});
