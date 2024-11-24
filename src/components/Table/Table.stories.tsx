import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta = {
  title: 'Components/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headers: ['Header 1', 'Header 2'],
    data: [['Row 1 Cell 1', 'Row 1 Cell 2'], ['Row 2 Cell 1', 'Row 2 Cell 2']],
  },
};