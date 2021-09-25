import { PeLineAmountCalculator, ResultValue } from 'pe-line-amount-calculator'

export type InputValue = {
  peSize: number | ''
  amount: number | ''
}

export const usePeLineAmountCalculator = ({ peSize, amount }: InputValue): ResultValue[] => {
  if (!peSize || !amount) {
    return []
  }

  return new PeLineAmountCalculator({ peSize, amount }).run()
}
