import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeVisible();
});

test('Button background color changes when disabled', () => {
  render(<Button disabled={true}>Click Me</Button>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveStyle('background-color: gray');
});