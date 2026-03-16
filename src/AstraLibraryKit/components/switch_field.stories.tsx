import type { Meta, StoryObj } from '@storybook/react-vite'
import { SwitchField } from './switch_field'

const meta = {
  title: 'Components/SwitchField',
  component: SwitchField,
  argTypes: {
    disabled: { control: 'boolean' },
    defaultSelected: { control: 'boolean' },
    hasDescription: { control: 'boolean' },
    showLabel: { control: 'boolean' },
  },
  args: {
    label: 'Notifications',
    description: 'Enable push notifications',
    defaultSelected: true,
    hasDescription: true,
    showLabel: true,
    disabled: false,
  },
} satisfies Meta<typeof SwitchField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Off: Story = {
  args: { defaultSelected: false },
}

export const NoDescription: Story = {
  args: { hasDescription: false },
}

export const Disabled: Story = {
  args: { disabled: true },
}
