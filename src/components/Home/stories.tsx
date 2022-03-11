import { Meta, Story } from '@storybook/react/types-6-0'

import Home, { HomeProps } from '.'

export default {
  title: 'Home',
  component: Home,
  args: {
    name: 'React Vite Standalone'
  }
} as Meta

export const Default: Story<HomeProps> = args => <Home {...args} />
