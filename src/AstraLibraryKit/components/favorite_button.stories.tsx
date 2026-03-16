import type { Meta, StoryObj } from '@storybook/react-vite'
import { FavoriteButton } from './favorite_button'

const meta = {
  title: 'Components/FavoriteButton',
  component: FavoriteButton,
  argTypes: {
    defaultFavorited: { control: 'boolean' },
  },
  args: {
    defaultFavorited: false,
  },
} satisfies Meta<typeof FavoriteButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Favorited: Story = {
  args: { defaultFavorited: true },
}
