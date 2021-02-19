import { render, screen } from '@testing-library/react'

import { HomeActions } from '.'

describe('<HomeActions />', () => {
  it('should render the heading', () => {
    const { container } = render(<HomeActions />)

    expect(
      screen.getByRole('heading', { name: /HomeActions works/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
