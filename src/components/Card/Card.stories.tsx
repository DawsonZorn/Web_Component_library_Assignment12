import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import RedPandaImage from './redpanda.jpg';

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
    imageSrc: RedPandaImage,
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