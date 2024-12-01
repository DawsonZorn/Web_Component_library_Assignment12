import type { Meta, StoryObj } from '@storybook/react';
import Img from './Img';
import Yukimiya from './YUKIMIYA BL.jpg';
const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: Yukimiya,
    alt: 'Placeholder Image',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
    disabled: true,
  },
};