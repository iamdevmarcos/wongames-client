import 'match-media-mock'
import { screen, fireEvent } from '@testing-library/react'

import Gallery from '.'
import { renderWithTheme } from 'utils/tests/helpers'

import mockItems from './mock'

describe('<Gallery />', () => {
  it.skip('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('should render open modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })

    fireEvent.click(
      screen.getAllByRole('button', { name: /Thumb - Gallery Image 1/i })[0]
    )

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should render close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={mockItems} />)

    const modal = screen.getByLabelText('modal')

    // Open modal
    fireEvent.click(
      screen.getAllByRole('button', { name: /Thumb - Gallery Image 1/i })[0]
    )

    // Close modal
    fireEvent.click(screen.getByRole('button', { name: 'close modal' }))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should render close modal when esc is pressed', () => {
    const { container } = renderWithTheme(<Gallery items={mockItems} />)

    const modal = screen.getByLabelText('modal')

    // Open modal
    fireEvent.click(
      screen.getAllByRole('button', { name: /Thumb - Gallery Image 1/i })[0]
    )

    // Close modal
    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
