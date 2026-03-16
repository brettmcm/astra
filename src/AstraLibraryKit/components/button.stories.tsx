import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { ArrowRight, Plus, Download } from 'lucide-react'

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'subtle'],
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Neutral: Story = {
  args: { variant: 'neutral' },
}

export const Subtle: Story = {
  args: { variant: 'subtle' },
}

export const Small: Story = {
  args: { size: 'small', children: 'Small' },
}

export const WithIconStart: Story = {
  args: { iconStart: <Plus size={16} />, children: 'Create' },
}

export const WithIconEnd: Story = {
  args: { iconEnd: <ArrowRight size={16} />, children: 'Next' },
}

export const WithBothIcons: Story = {
  args: {
    iconStart: <Download size={16} />,
    iconEnd: <ArrowRight size={16} />,
    children: 'Download',
  },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="subtle">Subtle</Button>
    </div>
  ),
}
