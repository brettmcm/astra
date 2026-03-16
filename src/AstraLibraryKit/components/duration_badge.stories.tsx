import type { Meta, StoryObj } from '@storybook/react-vite'
import { DurationBadge } from './duration_badge'

const meta = {
  title: 'Components/DurationBadge',
  component: DurationBadge,
  args: {
    duration: '0:01:30',
  },
} satisfies Meta<typeof DurationBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Short: Story = {
  args: { duration: '0:15' },
}

export const Long: Story = {
  args: { duration: '1:23:45' },
}
