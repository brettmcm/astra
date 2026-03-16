import type { Meta, StoryObj } from '@storybook/react-vite'
import { SecondaryNavItem } from './secondary_nav_item'
import { Home, Film } from 'lucide-react'

const meta = {
  title: 'Components/SecondaryNavItem',
  component: SecondaryNavItem,
  argTypes: {
    active: { control: 'boolean' },
  },
  args: {
    icon: <Home className="size-full" strokeWidth={1.5} />,
    label: 'Profile',
    active: false,
  },
} satisfies Meta<typeof SecondaryNavItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Active: Story = {
  args: { active: true },
}
