import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioGroup } from './radio'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    options: [
      { value: 'opt1', label: 'Option 1', description: 'First option' },
      { value: 'opt2', label: 'Option 2', description: 'Second option' },
      { value: 'opt3', label: 'Option 3' },
    ],
    defaultValue: 'opt1',
    disabled: false,
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true },
}

export const NoDescriptions: Story = {
  args: {
    options: [
      { value: 'a', label: 'Alpha' },
      { value: 'b', label: 'Beta' },
      { value: 'c', label: 'Gamma' },
    ],
  },
}
