import { api } from '@/lib/axios'

export interface GetMounthOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMounthOrdersAmount() {
  const response = await api.get<GetMounthOrdersAmountResponse>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
