import React, { useEffect, useState } from 'react';
import * as s from './styles';

export const Checkbox = ({
  checked,
  name,
  size = 's',
  hasError,
  labelErrorText,
  ref,
  onChange,
  disabled = false,
  dataTestId,
  children,
  }) => {
  const [isChecked, setChecked] = useState(Boolean(checked));

  useEffect(() => {
    if(checked !== isChecked) setChecked(Boolean(checked))
  }, [checked])

  const handleInputChange = (event) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(event);
    }
  };

  const childrenText = hasError ? labelErrorText || children : children;

  return (
    <s.Wrapper>
      <s.Checkbox
        type={'checkbox'}
        id={name}
        name={name}
        ref={ref}
        checked={isChecked}
        disabled={disabled}
        onChange={handleInputChange}
        data-test-id={dataTestId}
      />
      {children && (
        <s.Label htmlFor={name} hasError={hasError} size={size}>
          {childrenText}
        </s.Label>
      )}
    </s.Wrapper>
  );
};

export default Checkbox;
