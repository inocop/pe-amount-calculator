
import { Table, TableCaption, Tbody, Th, Thead, Tr, Link, Code } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FormStateContex } from '../../contexts/FormContext'
import { TableItem } from './TableItem'
import { usePeLineAmountCalculator } from '../../../shared/hooks/usePeLineAmountCalculator'

export const CalculationResultTable = () => {
  const { formValue: { peSize, amount } } = useContext(FormStateContex)
  const resultValues = usePeLineAmountCalculator({ peSize, amount })

  if (resultValues.length === 0) return null
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>号数</Th>
          <Th paddingX={0}>参考強度<br />
            <Link color="teal.400" href="https://fishing.sunline.co.jp/line/184/" target="_blank" rel="noopener noreferrer">
              ※SUNLINE 商品規格
            </Link>
          </Th>
          <Th isNumeric>糸巻量(m)</Th>
        </Tr>
      </Thead>
      <Tbody>
        { resultValues.map((value) => <TableItem key={value.peSize} item={value} />) }
      </Tbody>
      <TableCaption>
        計算結果は
        <Link color="teal.400" href="http://www.jaftma.or.jp/standard/" target="_blank" rel="noopener noreferrer">
          JAFTMA（日本釣用品工業会）
        </Link>
        によるPE糸の太さ標準規格<Code>1号=200d(デニール)</Code>を前提とした参考値になります。
      </TableCaption>
    </Table>
  )
}
