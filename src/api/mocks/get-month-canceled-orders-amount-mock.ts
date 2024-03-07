import { http, HttpResponse } from 'msw'
import { GetMounthCanceledOrdersAmountResponse } from '../get-mounth-cancel-orders-amount'

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMounthCanceledOrdersAmountResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  })
})
