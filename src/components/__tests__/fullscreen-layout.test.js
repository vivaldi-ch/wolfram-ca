import React from 'react';
import renderer from 'react-test-renderer';

import FullscreenLayout from '../fullscreen-layout';

describe('Fullscreen Layout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create((
        <FullscreenLayout>
          <h1>This is a test</h1>
        </FullscreenLayout>
      ))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
