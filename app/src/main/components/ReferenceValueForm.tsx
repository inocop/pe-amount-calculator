
import { chakra, VStack, FormControl, FormLabel, Input, FormErrorMessage, Button, Text } from '@chakra-ui/react'
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useContext } from 'react'
import { InputValue } from '../../shared/hooks/usePeLineAmountCalculator'
import { FormCommandContext } from '../contexts/FormContext'

export const ReferenceValueForm: FC = () => {
  const { saveFormValue } = useContext(FormCommandContext)

  const [formValue, setFormValue] = useState<InputValue>({
    peSize: '',
    amount: '',
  })

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [event.currentTarget.name]: event.currentTarget.value })
  }

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    saveFormValue(formValue)
  }

  return (
    <chakra.form
      onSubmit={handleOnSubmit}>
      <VStack spacing={4}>
        <Text>
          お手持ちのリールに記載されているPEラインの糸巻量を入力してください。
        </Text>
        <FormControl id="peSize" isRequired>
          <FormLabel>号数</FormLabel>
          <Input
            name="peSize"
            type="text"
            inputMode="numeric"
            placeholder="e.g. 0.8"
            value={formValue.peSize}
            onChange={handleOnChange}/>
        </FormControl>

        <FormControl id="amount" isRequired>
          <FormLabel>糸巻量(m)</FormLabel>
          <Input
            name="amount"
            type="text"
            inputMode="numeric"
            pattern="\d*"
            placeholder="e.g. 200"
            value={formValue.amount}
            onChange={handleOnChange}/>
        </FormControl>

        <Button type='submit'>計算</Button>
      </VStack>
    </chakra.form>
  )
}
