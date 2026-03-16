import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextareaField } from './textarea_field'

const meta = {
  title: 'Components/TextareaField',
  component: TextareaField,
  argTypes: {
    disabled: { control: 'boolean' },
    rows: { control: { type: 'number', min: 1, max: 10 } },
  },
  args: {
    label: 'Description',
    description: 'Describe your project',
    placeholder: 'Your text goes here...',
    rows: 3,
    disabled: false,
  },
} satisfies Meta<typeof TextareaField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: { value: 'This is some content in the textarea field.' },
}

export const Disabled: Story = {
  args: { disabled: true, value: 'Disabled textarea' },
}
