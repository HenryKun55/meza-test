import { Story, Meta } from '@storybook/react/types-6-0'
import { HomeHeader } from '.'

export default {
  title: 'HomeHeader',
  component: HomeHeader,
} as Meta

export const Basic: Story = () => <HomeHeader />
