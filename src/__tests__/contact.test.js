import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../modules/Contact/Contact'; // Adjust import according to your export type
import Footer from '../modules/footer/Footer';

test("whether our contact component is rendered or not", () => {
  render(<Footer />); // Make sure JSX is used to render the component

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
