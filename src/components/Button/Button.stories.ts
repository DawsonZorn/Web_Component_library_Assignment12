import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    bgColor: { control: 'color' },
    children: { control: 'text' }
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click Me',
    disabled: false,
    bgColor: 'blue',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Click Me',
    disabled: true,
    bgColor: 'blue',
  },
};