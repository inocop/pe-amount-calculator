import { PeLineAmountCalculator, ReferenceValue } from 'pe-line-amount-calculator'

type Args = {
  peSize?: number
  amount?: number
}

export const usePeLineAmountCalculator = ({ peSize, amount }: Args): ReferenceValue[] => {
  if (!peSize || !amount) {
    return []
  }

  return new PeLineAmountCalculator({ peSize, amount }).run()
}
