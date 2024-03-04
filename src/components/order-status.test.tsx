import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('OrderStatus', () => {
  it('should render the order status', () => {
    const wrapper = render(<OrderStatus status="delivering" />)
    expect(wrapper.getByText('Em entrega')).toBeInTheDocument()
  })

  it('should display the right text when status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    // wrapper.debug()
    const statusText = wrapper.getByText('Pendente')
    expect(statusText).toBeInTheDocument()

    const badgeElement = wrapper.getByTestId('order-status-badge')
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text when status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText('Em preparo')
    expect(statusText).toBeInTheDocument()

    const badgeElement = wrapper.getByTestId('order-status-badge')
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Cancelado')
    expect(statusText).toBeInTheDocument()

    const badgeElement = wrapper.getByTestId('order-status-badge')
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text when status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText('Em entrega')
    expect(statusText).toBeInTheDocument()

    const badgeElement = wrapper.getByTestId('order-status-badge')
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText('Entregue')
    expect(statusText).toBeInTheDocument()

    const badgeElement = wrapper.getByTestId('order-status-badge')
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
