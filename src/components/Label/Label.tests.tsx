import { render, screen } from '@testing-library/react';
import { Label } from './Label';

test('renders label', () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText('Test Label')).toBeVisible();  // Check visibility
});