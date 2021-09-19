import * as React from 'react'
import produce from 'immer'
import { State, Command, FormStateContex, FormCommandContext } from './FormContext'
import { InputValue } from '../../shared/hooks/usePeLineAmountCalculator'

type Action =
  | { type: 'commitFormValue'; value: InputValue }

const reducer = produce((state: State, action: Action) => {
  switch (action.type) {
    case 'commitFormValue':
      state.formValue = action.value
      break
    default:
      return state
  }
})

const generateCommand = (dispatch: React.Dispatch<Action>): Command => {
  return {
    saveFormValue: (formValue) => {
      dispatch({ type: 'commitFormValue', value: formValue })
    },
    clearFormValue: () => {
      dispatch({ type: 'commitFormValue', value: { peSize: '', amount: '' }})
    }
  }
}

export const FormContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { formValue: { peSize: '', amount: '' } })
  const command = generateCommand(dispatch)

  return (
    <FormStateContex.Provider value={state}>
      <FormCommandContext.Provider value={command}>
        {children}
      </FormCommandContext.Provider>
    </FormStateContex.Provider>
  )
}

