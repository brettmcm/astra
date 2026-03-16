import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonGroup } from './button_group'
import { Button } from './button'

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    align: { control: 'select', options: ['justify', 'start', 'end', 'center', 'stack'] },
  },
  args: {
    align: 'justify',
    children: (
      <>
        <Button variant="neutral">Cancel</Button>
        <Button variant="primary">Save</Button>
      </>
    ),
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Justify: Story = {}

export const End: Story = {
  args: { align: 'end' },
}

export const Center: Story = {
  args: { align: 'center' },
}

export const Stack: Story = {
  args: { align: 'stack' },
}
