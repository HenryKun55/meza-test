import { StoryFn } from '@storybook/addons'
import { ThemeProvider } from 'styled-components'

import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

const withGlobalStyles = (storyFn: StoryFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)

export default withGlobalStyles
