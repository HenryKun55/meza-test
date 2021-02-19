import { Story, Meta } from '@storybook/react/types-6-0'
import { HomeActions } from '.'

export default {
  title: 'HomeActions',
  component: HomeActions,
} as Meta

export const Basic: Story = () => <HomeActions />
