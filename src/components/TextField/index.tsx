import * as S from './styles'
import React, { useState, InputHTMLAttributes } from 'react'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  label,
  labelFor,
  initialValue,
  icon,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.InputWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input type="text" onChange={onChange} value={value} {...rest} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
