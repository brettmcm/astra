import type { Meta, StoryObj } from '@storybook/react-vite'
import { PromptPane } from './prompt_pane'
import { ChatBubbles } from './chat_bubbles'
import { Avatar } from './avatar'

const meta = {
  title: 'Components/PromptPane',
  component: PromptPane,
  args: {
    placeholder: 'Describe your video',
  },
  decorators: [
    (Story) => (
      <div style={{ height: 500, width: 380 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PromptPane>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {}

export const WithConversation: Story = {
  args: {
    children: (
      <>
        <ChatBubbles type="ai" text="How can I help you today?" />
        <ChatBubbles
          type="user"
          text="Can you trim the first 5 seconds?"
          userAvatar={<Avatar type="initial" initials="BM" size="small" />}
        />
        <ChatBubbles type="ai" text="Sure! I'll trim the first 5 seconds from your video. This should take about 30 seconds." />
      </>
    ),
  },
}
