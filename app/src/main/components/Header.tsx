
import { Image, Flex, Heading, Spacer } from '@chakra-ui/react'
import React, { FC } from 'react'
import { ColorModeSwitcher } from '../../shared/components/ColorModeSwitcher'

export const Header: FC = () => {
  return (
    <Flex h='100%' justify='center' align='center'>
      <Image
        borderRadius="full"
        boxSize="32px"
        src={`${process.env.PUBLIC_URL}/favicon.ico`}
      />
      <Heading as="h1" size="md" marginLeft="4" isTruncated>
        PEライン糸巻量計算ツール
      </Heading>
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  )
}
