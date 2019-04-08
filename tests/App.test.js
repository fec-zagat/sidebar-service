import { shallow } from 'enzyme';
import React from 'react';
import App from '../client/src/components/App';

describe('testing App component', () => {
  const wrapper = shallow(<App />);
  test('render Main Description', () => {
    expect(wrapper.text()).toEqual('<Main />');
  });
});
