import styled from 'styled-components'

import acceptBtnActive from '../../../img/accept-btn-black.svg'

export const ListItemsFormInput = styled.input`
  margin: 0;
  width: 85%;
  padding-bottom: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  outline: none;
`

export const ListItemsFormButton = styled.button`
  padding-top: 20px;
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  right: 16px;
  width: 12px;
  height: 10px;
  background-color: #fff;
  background: url(${acceptBtnActive}) center no-repeat;
  border: none;
  cursor: pointer;
  ${(props) =>
    !props.listItemInputText &&
    `
    opacity: 0.2;
`}
`
