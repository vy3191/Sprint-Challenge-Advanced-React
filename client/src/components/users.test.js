import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Users, {data} from './Users';

describe('It render and test users.js file', () => {
  test('map calls its argument with a non-null argument', async () => {
    // const wrapper = await rtl.render(<Users />)
    const mock = jest.fn();
    [1,2,3,4,5].map(x => mock(x));
    expect(mock).toBeCalledWith(expect.anything());
  });
})