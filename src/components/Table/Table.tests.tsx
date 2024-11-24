import { render, screen } from '@testing-library/react';
import { Table } from './Table';

test('renders table', () => {
  render(<Table headers={['Header']} data={[['Cell 1']]} />);
  expect(screen.getByText('Header')).toBeVisible();  // Check header visibility
});