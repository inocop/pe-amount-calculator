import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '../test-utils'
import { Main } from './index'
import '../setupTests'

test('renders learn react link', () => {
  render(<Main />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
