import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Knight from './knight';

describe('Square Component', () => {
  it('render component', () => {
    const component = shallow(<Knight />);

    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
