import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../client/src/components/App';

describe('Hello World test', () => {
  const wrapper = shallow(<App />);
  test('says Hello World', () => {
    expect(wrapper.text()).toEqual('Hello World');
  });
});
