import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { FormContextProvider } from './contexts/FormContextProvider'
import { Template } from './components/Template'

export const Main = () => {
  return (
    <ChakraProvider theme={theme}>
      <FormContextProvider>
        <Template />
      </FormContextProvider>
    </ChakraProvider>
  )
}
