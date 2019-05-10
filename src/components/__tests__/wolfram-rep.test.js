import React from 'react';
import renderer from 'react-test-renderer';

import WolframRep from '../wolfram-rep';

const arr = [0, 1, 0, 1, 0, 1, 0, 1];

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<WolframRep wolframArr={arr} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
