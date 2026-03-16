import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toolbar } from './toolbar'
import { ToolbarItem } from './toolbar_item'
import { Type, Image, Film, Music, Scissors } from 'lucide-react'

const meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
} satisfies Meta<typeof Toolbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <ToolbarItem icon={<Type size={18} />} selected />
        <ToolbarItem icon={<Image size={18} />} />
        <ToolbarItem icon={<Film size={18} />} />
        <ToolbarItem icon={<Music size={18} />} />
        <ToolbarItem icon={<Scissors size={18} />} />
      </>
    ),
  },
}
