import type { Meta, StoryObj } from '@storybook/react-vite'
import { PromptInput } from './prompt_input'

const meta = {
  title: 'Components/PromptInput',
  component: PromptInput,
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    placeholder: 'Describe your video',
    disabled: false,
  },
} satisfies Meta<typeof PromptInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: { value: 'Generate a cinematic intro sequence' },
}

export const Disabled: Story = {
  args: { disabled: true },
}
