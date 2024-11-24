import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1728875650224-fd3f375f6546?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card Title',
    description: 'This is a description of the card.',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    imageSrc: 'https://via.placeholder.com/300x150',
    title: 'Card Title',
    description: 'This is a description of the card.',
    disabled: true,
  },
};