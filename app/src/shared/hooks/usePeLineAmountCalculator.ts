import PeLineAmountCalculator, { ReferenceValue } from '../../../../lib/PeLineAmountCalculator'

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
