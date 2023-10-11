import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import App from './App';
import { errorMocks, mocks } from './test-data/mocks';

test('renders app with admin type checked', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(screen.getByText(/user types/i)).toBeInTheDocument();
  expect(screen.getByRole('radio', {
    name: /admin/i
  })).toBeChecked();
  expect(await screen.findByText(/test admin/i)).toBeInTheDocument();
  expect(screen.getByText(/admin users/i)).toBeInTheDocument();
});

test('switching user type changes the rendered users', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const managerRadioBtn = screen.getByRole('radio', {
    name: /manager/i
  });
  expect(await screen.findByText(/test admin/i)).toBeInTheDocument();
  expect(managerRadioBtn).not.toBeChecked();
  fireEvent.click(managerRadioBtn);
  expect(await screen.findByText(/test manager/i)).toBeInTheDocument();
  expect(screen.getByText(/manager users/i)).toBeInTheDocument();
  expect(managerRadioBtn).toBeChecked();
});

test('displays data fetching error', async () => {
  render(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(await screen.findByText(
    /something went wrong\. please try again later\./i)
  ).toBeInTheDocument();
});
