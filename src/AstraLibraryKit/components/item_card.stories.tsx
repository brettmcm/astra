import type { Meta, StoryObj } from '@storybook/react-vite'
import { ItemCard } from './item_card'

const meta = {
  title: 'Components/ItemCard',
  component: ItemCard,
  args: {
    title: 'My Video Project',
    updated: 'Edited 2m ago',
    spec: '4K',
    duration: '0:01:30',
  },
} satisfies Meta<typeof ItemCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithThumbnail: Story = {
  args: {
    thumbnail: (
      <div className="w-full h-full bg-brand-tertiary flex items-center justify-center text-text-secondary text-label-sm">
        Preview
      </div>
    ),
  },
}
