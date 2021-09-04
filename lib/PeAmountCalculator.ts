import { DENIER_PER_PE_SIZE_1, STANDARD_PE_SIZE_LIST } from './constants/StandardPeLine'

type ReferenceValue = {
  peSize: number
  amount: number
}

export default class PeAmountCalculator {
  private referenceValue: ReferenceValue

  public constructor(referenceValue: ReferenceValue) {
    this.referenceValue = referenceValue
  }

  public run(): ReferenceValue[] {
    const totalDenier = this.referenceValue.peSize * DENIER_PER_PE_SIZE_1 * this.referenceValue.amount

    return STANDARD_PE_SIZE_LIST.map((size) => {
      return { peSize: size, amount: Math.round(totalDenier / (size * DENIER_PER_PE_SIZE_1)) }
    }).filter((value) => value.amount >= 100 && value.amount <= 500)
  }
}
