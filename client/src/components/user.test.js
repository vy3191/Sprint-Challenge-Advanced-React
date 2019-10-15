import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import User from './User';


afterEach(rtl.cleanup);

test('Render the app', async () => {
   const wrapper  = await rtl.render(<User />)
   const name = wrapper.queryByText(/Name:/i);
   expect(name).toBeDefined()
  
});

