import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import BoardSquare from './boardSquare';

describe('Square Component', () => {
  it('render component', () => {
    const component = shallow(
      <BoardSquare posX={5} posY={5} isOverlay={true} />,
    );

    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
