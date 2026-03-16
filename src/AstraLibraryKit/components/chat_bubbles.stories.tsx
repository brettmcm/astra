import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChatBubbles } from './chat_bubbles'
import { Avatar } from './avatar'

const meta = {
  title: 'Components/ChatBubbles',
  component: ChatBubbles,
  argTypes: {
    type: { control: 'select', options: ['ai', 'user'] },
  },
  args: {
    type: 'ai',
    text: 'Hello! How can I help you today?',
  },
} satisfies Meta<typeof ChatBubbles>

export default meta
type Story = StoryObj<typeof meta>

export const AI: Story = {}

export const User: Story = {
  args: {
    type: 'user',
    text: 'Can you trim the first 5 seconds of this video?',
    userAvatar: <Avatar type="initial" initials="BM" size="small" />,
  },
}

export const LongMessage: Story = {
  args: {
    text: 'Sure! I can help you with that. I\'ll trim the first 5 seconds from your video. The process should take about 30 seconds. Would you like me to proceed?',
  },
}
