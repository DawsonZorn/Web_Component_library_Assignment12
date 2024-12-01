import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';
import MessiImage from './Messi.jpg';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: MessiImage,
    alt: 'Hero Image',
    text: 'Welcome',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x600',
    alt: 'Hero Image',
    text: 'Welcome',
    disabled: true,
  },
};