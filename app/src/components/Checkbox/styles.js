import { styled } from '@linaria/react'

export const Wrapper = styled.div`
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: 'SB Sans Interface';
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.hasError ? '#ff496a' : 'initial')};
`

export const Checkbox = styled.input`
  /* для элемента input c type="checkbox" */
  position: absolute;
  opacity: 0;
  z-index: -1;
  /* для элемента label, связанного с & */

  & + label {
    display: inline-block;
    user-select: none;
    margin-right: 0.5rem;
  }

  /* создание в label псевдоэлемента before со следующими стилями */

  & + label::before {
    content: '';
    display: inline-block;
    border: 1.5px solid #a8b8e0;
    box-sizing: border-box;
    border-radius: 5px;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    vertical-align: text-bottom;
  }

  /* стили при наведении курсора на checkbox */

  &:not(:disabled):not(:checked) + label:hover::before {
    background: #eef3ff;
    border: 1.5px solid #a8b8e0;
  }

  /* стили при наведении активный курсора на checkbox */

  &:not(:disabled):checked + label:hover::before {
    background-color: #da005e;
  }

  /* стили для активного чекбокса (при нажатии на него) */

  &:not(:disabled):active + label::before {
    border-color: #da005e;
  }

  /* стили для чекбокса, находящегося в фокусе */

  &:focus + label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */

  &:focus:not(:checked) + label::before {
    border-color: #80bdff;
  }

  /* стили для чекбокса, находящегося в состоянии checked */

  &:checked + label::before {
    border: none;
    // TO-DO fix a big https://github.com/callstack/linaria/issues/676
    background-color: #ff3c8a;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHdpZHRoPSIxMiIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgMTIgOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS43MDcxIDAuMjkyODkzQzEyLjA5NzYgMC42ODM0MTcgMTIuMDk3NiAxLjMxNjU4IDExLjcwNzEgMS43MDcxMUw0LjcwNzExIDguNzA3MTFDNC4zMTY1OCA5LjA5NzYzIDMuNjgzNDIgOS4wOTc2MyAzLjI5Mjg5IDguNzA3MTFMMC4yOTI4OTMgNS43MDcxMUMtMC4wOTc2MzExIDUuMzE2NTggLTAuMDk3NjMxMSA0LjY4MzQyIDAuMjkyODkzIDQuMjkyODlDMC42ODM0MTcgMy45MDIzNyAxLjMxNjU4IDMuOTAyMzcgMS43MDcxMSA0LjI5Mjg5TDQgNi41ODU3OUwxMC4yOTI5IDAuMjkyODkzQzEwLjY4MzQgLTAuMDk3NjMxMSAxMS4zMTY2IC0wLjA5NzYzMTEgMTEuNzA3MSAwLjI5Mjg5M1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=');
    background-position: 50%;
    background-repeat: no-repeat;
  }

  /* стили для чекбокса, находящегося в состоянии disabled */

  &:disabled + label {
    opacity: 0.4;
  }
`
