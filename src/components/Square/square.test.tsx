import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Square from './square';

describe('Square Component', () => {
  it('render component', () => {
    const component = shallow(<Square isBlack={true} isOverlay={false} />);

    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
