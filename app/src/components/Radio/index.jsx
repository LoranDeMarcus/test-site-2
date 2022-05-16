import React, { createContext, useContext } from 'react'

import * as s from './styles'

const RadioGroupContext = createContext({
  _value: '',
  onChange: () => {},
})

const Radio = ({ children, name, value, id, size = 's', ref, disabled = false }) => {
  const { onChange, _value } = useContext(RadioGroupContext)
  return (
    <s.RadioWrapper>
      <input
        id={id}
        onChange={() => onChange(value)}
        ref={ref}
        checked={value === _value}
        type="radio"
        name={name}
        disabled={disabled}
      />

      <s.Label htmlFor={id} size={size}>
        {children}
      </s.Label>
    </s.RadioWrapper>
  )
}

const RadioGroup = ({ value, onChange = () => {}, children }) => {
  const contextValue = {
    _value: value,
    onChange,
  }
  return <RadioGroupContext.Provider value={contextValue}>{children}</RadioGroupContext.Provider>
}

export { Radio, RadioGroup }
