import type { Meta, StoryObj } from '@storybook/react-vite'
import { SidebarNavigation } from './sidebar_navigation'
import { SidebarButton } from './sidebar_button'
import { Avatar } from './avatar'
import { Home, Film, Book, Settings } from 'lucide-react'

const meta = {
  title: 'Components/SidebarNavigation',
  component: SidebarNavigation,
  decorators: [
    (Story) => (
      <div style={{ height: 500 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SidebarNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} active />
        <SidebarButton icon={<Film className="size-full" strokeWidth={1.5} />} />
        <SidebarButton icon={<Book className="size-full" strokeWidth={1.5} />} />
      </>
    ),
    footer: (
      <>
        <SidebarButton icon={<Settings className="size-full" strokeWidth={1.5} />} />
        <Avatar type="initial" initials="BM" size="medium" />
      </>
    ),
  },
}
