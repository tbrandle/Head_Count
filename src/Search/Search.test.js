import Search from '../Search/Search';
import { shallow, mount } from 'enzyme'
import React from 'react';

import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Search tests', () =>  {
  const repo = new DistrictRepository(kinderData);

  test('renders an input field', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find('input').length).toBe(2)
  });

  test('trigger callback onChange', () => {
    const fakeFn = jest.fn()
    const wrapper = shallow(<Search repo={repo} callback={fakeFn}/>)
    expect(wrapper.find('input').length).toBe(2)
    wrapper.props().children[0].props.onChange({target:{value:'fakeValue'}})
    expect(fakeFn.mock.calls.length).toBe(1)
  });

});
