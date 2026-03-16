import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchComponent } from './search_component'

const meta = {
  title: 'Components/SearchComponent',
  component: SearchComponent,
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    placeholder: 'Search',
    disabled: false,
  },
} satisfies Meta<typeof SearchComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: { value: 'video clips' },
}

export const Disabled: Story = {
  args: { disabled: true },
}
