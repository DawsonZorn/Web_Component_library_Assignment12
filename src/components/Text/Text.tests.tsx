import { render, screen } from '@testing-library/react';
import { Text } from './Text';

test('renders text', () => {
  render(<Text content="Sample Text" />);
  expect(screen.getByText('Sample Text')).toBeVisible();  // Check visibility
});