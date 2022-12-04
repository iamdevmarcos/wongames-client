import * as S from './styles'
import React, { useState, InputHTMLAttributes } from 'react'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'right' | 'left'
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  label,
  labelFor,
  initialValue,
  icon,
  iconPosition = 'left',
  disabled,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...rest}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
