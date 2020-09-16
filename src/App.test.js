import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders renders without crashing', () => {
  render(<MemoryRouter>
    <App />
  </MemoryRouter>);

});
