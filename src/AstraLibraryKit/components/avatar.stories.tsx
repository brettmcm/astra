import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    type: { control: 'select', options: ['image', 'initial'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    shape: { control: 'select', options: ['circle', 'square'] },
  },
  args: {
    type: 'initial',
    size: 'large',
    shape: 'circle',
    initials: 'BM',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Initial: Story = {}

export const Square: Story = {
  args: { shape: 'square' },
}

export const Small: Story = {
  args: { size: 'small' },
}

export const Medium: Story = {
  args: { size: 'medium' },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar type="initial" initials="S" size="small" />
      <Avatar type="initial" initials="M" size="medium" />
      <Avatar type="initial" initials="L" size="large" />
    </div>
  ),
}
