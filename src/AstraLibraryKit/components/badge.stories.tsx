import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'brand', 'secondary'],
    },
    removable: { control: 'boolean' },
  },
  args: {
    label: 'Badge',
    variant: 'default',
    removable: false,
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Brand: Story = {
  args: { variant: 'brand', label: 'Brand' },
}

export const Success: Story = {
  args: { variant: 'success', label: 'Success' },
}

export const Warning: Story = {
  args: { variant: 'warning', label: 'Warning' },
}

export const Danger: Story = {
  args: { variant: 'danger', label: 'Danger' },
}

export const Removable: Story = {
  args: { removable: true, label: 'Removable' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge label="Default" variant="default" />
      <Badge label="Brand" variant="brand" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Danger" variant="danger" />
      <Badge label="Secondary" variant="secondary" />
    </div>
  ),
}
