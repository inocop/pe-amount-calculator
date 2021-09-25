import { PeLineDictionary } from '../types/PeLine'

/**
 * SUNLINE SIGLON PE×8 商品規格より引用
 * https://fishing.sunline.co.jp/line/184/
 */
const SUNLINE_SIGLON_PE8_DICT: PeLineDictionary = {
  0.3: { lb: 5 },
  0.4: { lb: 6 },
  0.5: { lb: 8 },
  0.6: { lb: 10 },
  0.8: { lb: 12 },
  1: { lb: 16 },
  1.2: { lb: 20 },
  1.5: { lb: 25 },
  2: { lb: 35 },
  3: { lb: 50 },
  4: { lb: 60 },
  5: { lb: 80 },
  6: { lb: 90 },
  8: { lb: 100 },
  10: { lb: 130 },
  12: { lb: 160 },
  15: { lb: 170 },
  20: { lb: 190 },
  30: { lb: 250 },
} as const

/**
 * SUNLINE ソルティメイト スモールゲームPE-HG 商品規格より引用
 * https://fishing.sunline.co.jp/line/305/
 */
const SUNLINE_SALTY_MATE_SMALL_GAME_DICT: PeLineDictionary = {
  0.15: { lb: 2.5 },
  0.2: { lb: 3 },
  0.3: { lb: 5 },
  0.4: { lb: 6 },
  0.5: { lb: 8 },
  0.6: { lb: 10 },
} as const

export const SUNLINE_PE_LINE_DICT = { ...SUNLINE_SALTY_MATE_SMALL_GAME_DICT, ...SUNLINE_SIGLON_PE8_DICT }
