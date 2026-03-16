import type { Meta, StoryObj } from '@storybook/react-vite'
import { SidebarButton } from './sidebar_button'
import { Home, Film, Settings, Book } from 'lucide-react'

const meta = {
  title: 'Components/SidebarButton',
  component: SidebarButton,
  argTypes: {
    active: { control: 'boolean' },
  },
  args: {
    icon: <Home className="size-full" strokeWidth={1.5} />,
    active: false,
  },
  decorators: [
    (Story) => (
      <div className="bg-surface-dark p-4 w-fit">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SidebarButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Active: Story = {
  args: { active: true },
}

export const AllStates: Story = {
  render: () => (
    <div className="bg-surface-dark p-4 flex flex-col gap-2 w-fit">
      <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} active />
      <SidebarButton icon={<Film className="size-full" strokeWidth={1.5} />} />
      <SidebarButton icon={<Book className="size-full" strokeWidth={1.5} />} />
      <SidebarButton icon={<Settings className="size-full" strokeWidth={1.5} />} />
    </div>
  ),
}
