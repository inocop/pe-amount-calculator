
import { Flex, Heading, Spacer } from '@chakra-ui/react'
import React, { FC } from 'react'
import { ColorModeSwitcher } from '../../shared/components/ColorModeSwitcher'

export const Header: FC = () => {
  return (
    <Flex h='100%' justify='center' align='center'>
      <Heading as="h1" size="md" isTruncated>
        PEライン糸巻量計算ツール
      </Heading>
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  )
}
