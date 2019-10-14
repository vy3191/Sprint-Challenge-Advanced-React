import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';	


afterEach(rtl.cleanup);

it('renders without crashing', () => {	
 const wrapper = rtl.render(<App />)
   const element = wrapper.getByText(/Advanced React Sprint Challenge/i)
  expect(element).toBeVisible()
});