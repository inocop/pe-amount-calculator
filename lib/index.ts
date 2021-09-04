#! /usr/bin/env node

import readline from 'readline'
import PeAmountCalculator from './PeAmountCalculator'

const question = (message: string) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise<number>((resolve) => {
    readlineInterface.question(message, (answer) => {
      resolve(parseFloat(answer))
      readlineInterface.close()
    })
  })
}

;(async () => {
  const peSize = await question('号数: ')
  const amount = await question('糸巻量(m): ')
  console.log('')

  const values = new PeAmountCalculator({ peSize, amount }).run()
  values.map((value) => {
    console.log(`${value.peSize}号: ${value.amount}m`)
  })
})()
