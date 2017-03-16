import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow, mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
});

it('contains search component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('Search').length).toBe(1)
})

it('contains cadwrapper component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('CardWrapper').length).toBe(1)
})

it('app state holds curernt search infomation', () => {
  const wrapper = shallow(<App />)
  expect(Array.isArray(wrapper.state().currentSearch)).toBe(true)
})