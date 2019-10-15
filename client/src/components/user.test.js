import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import User from './User';


afterEach(rtl.cleanup);

describe('Testing user component', () => {
      test('It should test and run h2 element for user name', async () => {
         const wrapper  = await rtl.render(<User />)
         const name = wrapper.queryByText(/Name:/i);
         expect(name).toBeDefined() 
         
      })

      test('It should test and run h2 element for user country', async () => {
         const wrapper  = await rtl.render(<User />)
         const country = wrapper.queryByText(/country:/i);
         expect(country).toBeDefined()  
      })

      test('It should test and run h2 element for user country', async () => {
         const wrapper  = await rtl.render(<User />)
         const search = wrapper.queryByText(/searches:/i);
         expect(search).toBeDefined()  
      })

})
