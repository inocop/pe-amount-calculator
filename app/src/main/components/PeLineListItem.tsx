
import { Box, HStack } from '@chakra-ui/react'
import React, { FC } from 'react'

type Props = {
  item: {
    peSize: number,
    amount: number
  }
}

export const PeLineListItem: FC<Props> = ({ item }) => {
  return (
    <HStack>
      <Box>{item.peSize}号</Box>
      <Box>{item.amount}m</Box>
    </HStack>
  )
}
