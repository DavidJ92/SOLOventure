import { render, screen } from '@testing-library/react';
import App from './Landing';
import Landing from './Landing';

test('renders learn react link', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
