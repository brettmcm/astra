import type { Meta, StoryObj } from '@storybook/react-vite'
import { AstraLogo } from './astra_logo'

const meta = {
  title: 'Components/AstraLogo',
  component: AstraLogo,
  argTypes: {
    size: { control: { type: 'number', min: 16, max: 128 } },
  },
  args: {
    size: 32,
  },
} satisfies Meta<typeof AstraLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Large: Story = {
  args: { size: 64 },
}

export const Small: Story = {
  args: { size: 16 },
}
