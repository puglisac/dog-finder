import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders renders without crashing', () => {
  render(<MemoryRouter>
    <App />
  </MemoryRouter>);

});

test('list off dogs appears', () => {
  const {getAllByText} = render(<MemoryRouter>
    <App />
  </MemoryRouter>);

  expect(getAllByText("Whiskey")[0]).toBeInTheDocument();
});

test('clicking on dog name renders dog details', ()=> {
  const {getAllByText, getByText, queryByText} = render(<MemoryRouter>
    <App />
  </MemoryRouter>);
  expect(queryByText("Whiskey loves eating popcorn.")).not.toBeInTheDocument();
  const link = getAllByText("Whiskey")[0];
  fireEvent.click(link);
  expect(getByText("Whiskey loves eating popcorn.")).toBeInTheDocument();
})
