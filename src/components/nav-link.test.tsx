import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink component', () => {
  it('should highlight the nav link when  is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    // wrapper.debug()

    expect(wrapper.getByText('About')).toHaveAttribute('data-active', 'true')
    expect(wrapper.getByText('Home')).toHaveAttribute('data-active', 'false')
    expect(wrapper.getByText('About').dataset.active).toEqual('true')
  })
})
