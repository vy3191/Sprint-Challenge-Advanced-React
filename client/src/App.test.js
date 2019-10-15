import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';	
import Users from './components/Users';

afterEach(rtl.cleanup);


describe('It should render the App component without crushing', () => {
    test('renders without crashing', async () => {	
        const wrapper = await rtl.render(<App />)
        const element = wrapper.getByText(/Advanced React Sprint Challenge/i)
        expect(element).toBeDefined(); 
        expect(element).toBeVisible();
    })    

})