import { Story, Meta } from '@storybook/react/types-6-0'
import { News } from '.'

export default {
  title: 'News',
  component: News,
} as Meta

export const Basic: Story = () => <News />
