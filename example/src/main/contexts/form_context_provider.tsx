import * as React from 'react'
import produce from 'immer'
import { FormState, FormCommand, FormStateContex, FormCommandContext } from './form_context'

type Action =
  | { type: 'commitPeSize'; value: number }
  | { type: 'commitAmount'; value: number }

const reducer = produce((state: FormState, action: Action) => {
  switch (action.type) {
    case 'commitPeSize':
      state.peSize = action.value
      break
    case 'commitAmount':
      state.amount = action.value
      break
    default:
      return state
  }
})

const generateCommand = (dispatch: React.Dispatch<Action>): FormCommand => {
  return {
    setPeSize: (peSize) => {
      dispatch({ type: 'commitPeSize', value: peSize })
    },
    setAmount: (amount) => {
      dispatch({ type: 'commitAmount', value: amount })
    },
  }
}

export const FormContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { peSize: null, amount: null })
  const command = generateCommand(dispatch)

  return (
    <FormStateContex.Provider value={state}>
      <FormCommandContext.Provider value={command}>
        {children}
      </FormCommandContext.Provider>
    </FormStateContex.Provider>
  )
}

