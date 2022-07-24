import styled from 'styled-components'

export const ListsFormItem = styled.div`
  position: relative;
  margin-top: 16px;
`

export const ListsFormInner = styled.div`
  background-color: #fff;
  border-radius: 8px;
`

export const ListsFormInput = styled.input`
  margin: 0;
  width: 70%;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  padding-left: 16px;
  outline: none;
  border-radius: 8px;
`

export const ListsFormButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  position: absolute;
  right: 16px;
  top: 16px;
  background-color: #fff;
  border: none;
  color: rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.listTitle &&
    `
  right: 6px;
  top: 6px;
  padding: 10px 8px;
  background-color: #80c890;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`}
`
