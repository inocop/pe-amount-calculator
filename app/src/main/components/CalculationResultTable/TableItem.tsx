import { Td, Tr, Text } from '@chakra-ui/react'
import { ResultValue } from 'pe-line-amount-calculator'
import React, { FC } from 'react'

type Props = {
  item: ResultValue
}

export const TableItem: FC<Props> = ({ item }) => {
  return (
    <Tr>
      <Td>{item.peSize}号</Td>
      <Td isNumeric paddingX={0}>
        { item.referenceSpec &&
          <>{item.referenceSpec.lb}lb ({item.referenceSpec.kg}kg)</>
        }
      </Td>
      <Td isNumeric>{item.amount}m</Td>
    </Tr>
  )
}
