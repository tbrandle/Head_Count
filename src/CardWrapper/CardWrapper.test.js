import CardWrapper from '../CardWrapper/CardWrapper'
import { shallow, mount } from 'enzyme'
import React from 'react';

import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('Card Wrapper tests', () =>  {
  const repo = new DistrictRepository(kinderData);

  test('renders list of districts', () => {
    const wrapper = mount(<CardWrapper repo={repo} displayTheseGuys={['Colorado', 'ADAMS-ARAPAHOE 28J']}/>)
    expect(wrapper.find('.district-card').length).toBe(2)
  });

  test('stores selected cards into state', () => {
    const wrapper = mount(<CardWrapper repo={repo} displayTheseGuys={['Colorado', 'ADAMS-ARAPAHOE 28J']}/>)
    expect(wrapper.find('.district-card').length).toBe(2)
    wrapper.node.handleCardSelect({location:'hey', data: {2001:.03}})
    expect(wrapper.state().card1).toEqual({location:'hey', data: {2001:.03}})
  });

});
