import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import User from './User';


afterEach(rtl.cleanup);

test('Render the app', () => {
   const wrapper  = rtl.render(<User />)
   const name = wrapper.getByTestId('user-name');
   expect(element).toBeDefined();
  
});

