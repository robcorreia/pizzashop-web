import { http, HttpResponse } from 'msw'
import { GetMounthOrdersAmountResponse } from '../get-mounth-order-amount'

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMounthOrdersAmountResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  })
})
