import { STANDARD_PE_SIZE_LIST } from '../constants/StandardPeLine'

type PeLineSizeList = typeof STANDARD_PE_SIZE_LIST[number]

export type PeLineSpec = {
  lb: number
  kg?: number
}

export type PeLineDictionary = {
  [key in PeLineSizeList]+?: PeLineSpec
}
