import type { Preview } from '@storybook/react-vite'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#161621' },
      ],
    },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    (Story, context) => {
      const bg = context.globals.backgrounds?.value
      const isDark = bg === '#161621'
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return Story()
    },
  ],
}

export default preview
