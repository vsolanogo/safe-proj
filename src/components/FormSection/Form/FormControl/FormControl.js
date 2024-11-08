import React, { useState } from "react"
import styled from "styled-components"
import { getRem } from "../../../../utils"
import { useFormatMessage } from "../../../../hooks"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"

const Control = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${getRem(15)};
`

const FieldWrapper = styled.div`
  height: ${getRem(48)};
  position: relative;
`
const InputField = styled.input`
  width: 100%;
  height: ${getRem(48)};
  outline: none;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: ${getRem(14)} ${getRem(21)} ${getRem(13)} ${getRem(21)};
  font-size: ${getRem(14)};
  transition: all linear 0.1s;
  -webkit-appearance: none;
  &:focus {
    border-color: #181930;
    & + label {
      top: 0;
      transform: translateY(-50%);
      font-size: ${getRem(13)};
      background-color: #fff;
      padding: 0 ${getRem(5)};
      left: ${getRem(18)};
      color: #181930;
    }
  }
  &:hover {
    border-color: var(--blue-color);
  }
  &.failed {
    border-color: #9e0019;
    & + label.field-active {
      color: #9e0019;
    }
    &:focus {
      & + label {
        color: #9e0019;
      }
    }
  }
`

const Label = styled.label`
  color: #818c99;
  position: absolute;
  top: 50%;
  left: ${getRem(21)};
  transform: translateY(-50%);
  font-size: ${getRem(14)};
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  transition: all linear 0.1s;
  &.field-active {
    top: 0;
    transform: translateY(-50%);
    font-size: ${getRem(13)};
    background-color: #fff;
    padding: 0 ${getRem(5)};
    left: ${getRem(18)};
    color: #181930;
  }
`

export const FormControl = ({
  value,
  isActive,
  labelText,
  onChange,
  onBlur,
  errors,
  ...restProps
}) => {
  const [touched, setTouched] = useState(false)
  const f = useFormatMessage()

  const handleChange = event => {
    setTouched(true)
    onChange(event)
  }

  const errorClassName = errors.length && touched ? "failed" : "valid"

  return (
    <Control>
      <FieldWrapper>
        <InputField
          value={value}
          onChange={event => handleChange(event)}
          onBlur={onBlur}
          autoComplete="off"
          className={errorClassName}
          {...restProps}
        />
        <Label
          htmlFor={restProps.id}
          className={isActive ? "field-active" : ""}
        >
          {f(labelText)}
        </Label>
      </FieldWrapper>
      {errors.length > 0 &&
        touched &&
        errors.map((error, i) => <ErrorMessage key={i} error={error} />)}
    </Control>
  )
}
