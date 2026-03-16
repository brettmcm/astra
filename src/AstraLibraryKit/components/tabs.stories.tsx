import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from './tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    tabs: [
      { id: 'details', label: 'Details', content: <p className="text-text-secondary p-4">Project details go here.</p> },
      { id: 'settings', label: 'Settings', content: <p className="text-text-secondary p-4">Settings content here.</p> },
      { id: 'export', label: 'Export', content: <p className="text-text-secondary p-4">Export options here.</p> },
    ],
    defaultTab: 'details',
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TwoTabs: Story = {
  args: {
    tabs: [
      { id: 'edit', label: 'Edit', content: <p className="text-text-secondary p-4">Editor view.</p> },
      { id: 'preview', label: 'Preview', content: <p className="text-text-secondary p-4">Preview view.</p> },
    ],
  },
}
