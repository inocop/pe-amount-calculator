import * as React from 'react'
import { InputValue } from '../../shared/hooks/usePeLineAmountCalculator'

export type State = {
  formValue: InputValue
}

export type Command = {
  saveFormValue: (formValue: InputValue) => void
  clearFormValue: () => void
}

export const FormStateContex = React.createContext<State>(null as any)
export const FormCommandContext = React.createContext<Command>(null as any)
