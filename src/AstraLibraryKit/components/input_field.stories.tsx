import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputField } from './input_field'
import { Search, DollarSign } from 'lucide-react'

const meta = {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Project Name',
    description: 'Give your project a name',
    placeholder: 'I am a placeholder...',
    disabled: false,
  },
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: { value: 'My Project' },
}

export const WithPrefix: Story = {
  args: {
    label: 'Search',
    prefix: <Search size={16} />,
    placeholder: 'Search...',
    description: undefined,
  },
}

export const WithSuffix: Story = {
  args: {
    label: 'Amount',
    suffix: 'USD',
    placeholder: '0.00',
    description: undefined,
  },
}

export const Disabled: Story = {
  args: { disabled: true, value: 'Disabled input' },
}
