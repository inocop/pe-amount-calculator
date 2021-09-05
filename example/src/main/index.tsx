import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { FormContextProvider } from './contexts/form_context_provider'
import { Template } from './components/template'

export const Main = () => {
  return (
    <ChakraProvider theme={theme}>
      <FormContextProvider>
        <Template />
      </FormContextProvider>
   </ChakraProvider>
  )
}
