import { shallow } from 'enzyme';
import React from 'react';

import App from '../client/src/components/App';
import Main from '../client/src/components/Main';
import SideBar from '../client/src/components/SideBar';
import Map from '../client/src/components/Map';
import Hours from '../client/src/components/Hours';
import MapModal from '../client/src/components/Modal/MapModal';
import FaceTimeModal from '../client/src/components/Modal/FaceTimeModal';

describe('testing App component', () => {
  test('render Main Description component renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test('render MapModal Description component', () => {
    const wrapper = shallow(<MapModal />);
    expect(wrapper.exists()).toBe(true);
  });

  test('render FaceTimeModal component', () => {
    const wrapper = shallow(<FaceTimeModal />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('testing components in App', () => {
  test('render Main Description component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.exists()).toBe(true);
  });

  test('render SideBar component', () => {
    const wrapper = shallow(<SideBar />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('testing components in SideBar', () => {
  test('render Map Description component', () => {
    const wrapper = shallow(<Map />);
    expect(wrapper.exists()).toBe(true);
  });

  test('render Hours component', () => {
    const wrapper = shallow(<Hours />);
    expect(wrapper.exists()).toBe(true);
  });
});
