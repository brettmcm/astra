import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toast } from './toast'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning'],
    },
    progress: { control: { type: 'range', min: 0, max: 100 } },
    showCancel: { control: 'boolean' },
  },
  args: {
    message: 'Uploading...',
    variant: 'default',
    progress: 45,
    showCancel: true,
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Success: Story = {
  args: { variant: 'success', message: 'Upload complete!', progress: 100 },
}

export const Error: Story = {
  args: { variant: 'error', message: 'Upload failed', progress: 0 },
}

export const Warning: Story = {
  args: { variant: 'warning', message: 'Low storage', progress: 80 },
}

export const Indeterminate: Story = {
  args: { message: 'Processing...', progress: 0 },
}
