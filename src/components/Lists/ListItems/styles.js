import styled from 'styled-components'

import checkmark from '../../../img/checkmark.svg'

export const ListItem = styled.div`
  padding: 0 0 16px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
`

export const ListItemLabel = styled.label`
  line-height: 20px;
  padding-left: 10px;
  display: block;
  width: 85%;
  word-wrap: break-word;
  ${(props) =>
    props.isListItemCompleted &&
    `
    text-decoration: line-through;
    color: #cdc6c6;
`}
`

export const CheckboxStyled = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 0.3px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin-left: -26px;
`

export const Checkbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  padding: 26px;
  &:checked + ${CheckboxStyled}::before {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    background: url(${checkmark}) center no-repeat;
    background-color: rgb(0, 0, 0);
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
