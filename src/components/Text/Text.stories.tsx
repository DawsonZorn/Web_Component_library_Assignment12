import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Sample text here.',
    fontSize: '16px',
    fontWeight: 'normal',
    color: 'blue',
    disabled: false,
  },
};

export const DisabledText: Story = {
  args: {
    children: 'This text is currently disabled.',
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#F2F2F2',
    disabled: true,
  },
};