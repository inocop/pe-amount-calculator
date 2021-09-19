
import { Td, Tr } from '@chakra-ui/react'
import { ReferenceValue } from 'pe-line-amount-calculator'
import React, { FC } from 'react'

type Props = {
  item: ReferenceValue
}

export const TableItem: FC<Props> = ({ item }) => {
  return (
    <Tr>
      <Td>{item.peSize}号</Td>
      <Td isNumeric>{item.amount}m</Td>
    </Tr>
  )
}
