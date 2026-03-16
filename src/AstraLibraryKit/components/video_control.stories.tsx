import type { Meta, StoryObj } from '@storybook/react-vite'
import { VideoControl } from './video_control'

const meta = {
  title: 'Components/VideoControl',
  component: VideoControl,
  argTypes: {
    isPlaying: { control: 'boolean' },
    progress: { control: { type: 'range', min: 0, max: 100 } },
    currentTime: { control: 'number' },
    totalTime: { control: 'number' },
  },
  args: {
    currentTime: 30,
    totalTime: 120,
    progress: 25,
    isPlaying: false,
  },
} satisfies Meta<typeof VideoControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Playing: Story = {
  args: { isPlaying: true, progress: 50, currentTime: 60 },
}

export const AtEnd: Story = {
  args: { progress: 100, currentTime: 120 },
}
