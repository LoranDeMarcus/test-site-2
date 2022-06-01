import React, { useCallback, useState } from 'react'
import * as s from './styles'

export const Input = ({
  value,
  disabled = false,
  label = '',
  autoFocus = false,
  errorMessage = '',
  htmlType = 'text',
  id,
  readonly,
  maxLength,
  placeholder,
  externalRef,
  onChange = () => null,
  onFocus = () => null,
  onBlur = () => null,
  onPressEnter = () => null,
  name,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const changeHandler = useCallback(
    (e) => {
      const targetValue = typeof e !== 'string' ? e.target.value : e;
      onChange(targetValue);
    },
    [onChange],
  );

  const focusHandler = useCallback(() => {
    setIsFocus(true);
    onFocus();
  }, [onFocus]);

  const blurHandler = () => {
    setIsFocus(false);
    onBlur();
  };

  const pressEnterHandler = useCallback(
    (e) => {
      if (e.key === 'Enter') onPressEnter();
    },
    [onPressEnter],
  );

  return (
    <s.Wrapper data-empty={!!value}>
      <s.Input
        name={name}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onKeyDown={pressEnterHandler}
        value={value}
        ref={externalRef}
        autoFocus={autoFocus}
        disabled={disabled}
        type={htmlType}
        id={id}
        data-error={!!errorMessage}
        maxLength={maxLength}
        placeholder={placeholder}
        readOnly={readonly}
      />
      <s.Label htmlFor={id} data-empty={!!value} data-focus={isFocus}>
        {label}
      </s.Label>
      {errorMessage && (
        <s.ErrorText color='#FF496A'>
          {errorMessage}
        </s.ErrorText>
      )}
    </s.Wrapper>
  )
}
