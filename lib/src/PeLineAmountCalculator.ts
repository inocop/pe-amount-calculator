import { DENIER_PER_PE_SIZE_1, STANDARD_PE_SIZE_LIST } from './constants/StandardPeLine'
import { SUNLINE_PE_LINE_DICT } from './constants/SunlinePeLine'
import { PeLineSpec } from './types/PeLine'

export type InputValue = {
  peSize: number
  amount: number
}

export type ResultValue = {
  peSize: number
  amount: number
  referenceSpec?: PeLineSpec
}

export default class PeLineAmountCalculator {
  private inputValue: InputValue

  public constructor(inputValue: InputValue) {
    this.inputValue = inputValue
  }

  public run(): ResultValue[] {
    const totalDenier = this.inputValue.peSize * DENIER_PER_PE_SIZE_1 * this.inputValue.amount

    return STANDARD_PE_SIZE_LIST.map((size) => {
      const referenceSpec = SUNLINE_PE_LINE_DICT[size]
      if (referenceSpec) {
        referenceSpec.kg = Math.round(referenceSpec.lb * 0.45359237 * 10) / 10
      }

      return {
        peSize: size,
        amount: Math.round(totalDenier / (size * DENIER_PER_PE_SIZE_1)),
        referenceSpec,
      }
    }).filter((value) => value.amount >= 100 && value.amount <= 500)
  }
}
