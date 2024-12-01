import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    disabled: false,
    tableHeader: [
      { text: 'Header 1', color: 'black' },
      { text: 'Header 2', color: 'black' },
    ],
    tableRows: [
      [
        { text: 'Row 1 Cell 1', color: 'blue' },
        { text: 'Row 1 Cell 2', color: 'blue' },
      ],
      [
        { text: 'Row 2 Cell 1', color: 'green' },
        { text: 'Row 2 Cell 2', color: 'green' },
      ],
    ],
    tableFooter: [
      { text: 'Footer Cell 1', color: 'black' },
      { text: 'Footer Cell 2', color: 'black' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    tableHeader: [
      { text: 'Header 1', color: 'black' },
      { text: 'Header 2', color: 'black' },
    ],
    tableRows: [
      [
        { text: 'Row 1 Cell 1', color: 'blue' },
        { text: 'Row 1 Cell 2', color: 'blue' },
      ],
    ],
    tableFooter: [
      { text: 'Footer Cell 1', color: 'black' },
      { text: 'Footer Cell 2', color: 'black' },
    ],
  },
};