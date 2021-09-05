import * as React from 'react'
import produce from 'immer'
import { FormState, FormCommand, FormStateContex, FormCommandContext } from './FormContext'

type Action =
  | { type: 'commitPeSize'; value: number | undefined }
  | { type: 'commitAmount'; value: number | undefined }

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
    clear: () => {
      dispatch({ type: 'commitPeSize', value: undefined })
      dispatch({ type: 'commitAmount', value: undefined })
    }
  }
}

export const FormContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { peSize: 1, amount: 200 })
  const command = generateCommand(dispatch)

  return (
    <FormStateContex.Provider value={state}>
      <FormCommandContext.Provider value={command}>
        {children}
      </FormCommandContext.Provider>
    </FormStateContex.Provider>
  )
}

