import type { Meta, StoryObj } from '@storybook/react-vite'
import { SecondaryNav } from './secondary_nav'
import { SecondaryNavItem } from './secondary_nav_item'
import { User, CreditCard, Bell, Folder } from 'lucide-react'

const meta = {
  title: 'Components/SecondaryNav',
  component: SecondaryNav,
  decorators: [
    (Story) => (
      <div style={{ height: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SecondaryNav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Settings',
    children: (
      <>
        <SecondaryNavItem icon={<User className="size-full" strokeWidth={1.5} />} label="Profile" active />
        <SecondaryNavItem icon={<CreditCard className="size-full" strokeWidth={1.5} />} label="Billing" />
        <SecondaryNavItem icon={<Bell className="size-full" strokeWidth={1.5} />} label="Notifications" />
        <SecondaryNavItem icon={<Folder className="size-full" strokeWidth={1.5} />} label="Media" />
      </>
    ),
  },
}
