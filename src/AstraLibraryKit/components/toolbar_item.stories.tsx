import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToolbarItem } from './toolbar_item'
import { Type, Image } from 'lucide-react'

const meta = {
  title: 'Components/ToolbarItem',
  component: ToolbarItem,
  argTypes: {
    selected: { control: 'boolean' },
  },
  args: {
    icon: <Type size={18} />,
    selected: false,
  },
} satisfies Meta<typeof ToolbarItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: { selected: true },
}
