import type { Meta, StoryObj } from '@storybook/react-vite'
import { AvatarGroup } from './avatar_group'

const sampleAvatars = [
  { src: '', alt: 'User 1' },
  { src: '', alt: 'User 2' },
  { src: '', alt: 'User 3' },
  { src: '', alt: 'User 4' },
  { src: '', alt: 'User 5' },
]

const meta = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    spacing: { control: 'select', options: ['overlap', 'spaced'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    maxVisible: { control: { type: 'number', min: 1, max: 10 } },
    showOverflow: { control: 'boolean' },
  },
  args: {
    avatars: sampleAvatars,
    maxVisible: 3,
    spacing: 'spaced',
    size: 'md',
    showOverflow: true,
  },
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Overlap: Story = {
  args: { spacing: 'overlap' },
}

export const Large: Story = {
  args: { size: 'lg' },
}

export const Small: Story = {
  args: { size: 'sm' },
}
