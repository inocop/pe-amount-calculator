
import React from 'react'
import { Stack, Grid, GridItem } from '@chakra-ui/react'
import { CalculationResultTable } from './CalculationResultTable'
import { ReferenceValueForm } from './ReferenceValueForm'
import { Header } from './Header'

export const Template = () => {
  return (
    <Grid
      minH="100vh"
      templateRows="72px 1fr"
      templateColumns={{
        base: "1fr",
        md: "1fr 2fr 1fr"
      }}
      templateAreas={{
        base: '"header"\
               "main"',
        md: '"header      header header"\
             "left-space  main   right-space"'
      }}
    >
      <GridItem gridArea="header" margin="4">
        <Header />
      </GridItem>
      <GridItem gridArea="main" margin="4">
        <Stack spacing={6}>
          <ReferenceValueForm />
          <CalculationResultTable />
        </Stack>
      </GridItem>
    </Grid>
  )
}
