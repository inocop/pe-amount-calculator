
import { VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FormStateContex } from '../contexts/FormContext'
import { PeLineListItem } from './PeLineListItem'
import { usePeLineAmountCalculator } from '../../shared/hooks/usePeLineAmountCalculator'

export const PeLineList = () => {
  const { peSize, amount } = useContext(FormStateContex)
  const resultValues = usePeLineAmountCalculator({ peSize, amount })

  return (
    <VStack>
      { resultValues.map((value) => <PeLineListItem key={value.peSize} item={value} />) }
    </VStack>
  )
}
