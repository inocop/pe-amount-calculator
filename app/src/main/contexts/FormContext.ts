import * as React from 'react'

export type FormState = {
  peSize?: number
  amount?: number
}

export type FormCommand = {
  setPeSize: (peSize: number) => void
  setAmount: (amount: number) => void
  clear: () => void
}

export const FormStateContex = React.createContext<FormState>(null as any)
export const FormCommandContext = React.createContext<FormCommand>(null as any)
