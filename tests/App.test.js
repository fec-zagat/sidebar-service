import { shallow } from 'enzyme';
import React from 'react';
import App from '../client/src/components/App';

describe('testing App component', () => {
  const wrapper = shallow(<App />);
  test('says Hello World', () => {
    expect(wrapper.text()).toEqual('Hello World');
  });
});
