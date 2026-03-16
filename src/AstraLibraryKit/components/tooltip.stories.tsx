import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip } from './tooltip'
import { Button } from './button'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    delay: { control: { type: 'number', min: 0, max: 1000 } },
  },
  args: {
    content: 'Tooltip text',
    position: 'top',
    delay: 200,
    children: <Button variant="neutral">Hover me</Button>,
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {}

export const Bottom: Story = {
  args: { position: 'bottom' },
}

export const Left: Story = {
  args: { position: 'left' },
}

export const Right: Story = {
  args: { position: 'right' },
}
