import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'

import { Context } from '../../../context/context'
import checkmark from '../../../img/checkmark.svg'

const ListItem = styled.div`
  padding: 0 0 16px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
`

const ListItemLabel = styled.label`
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

const CheckboxStyled = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 0.3px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin-left: -26px;
`

const Checkbox = styled.input`
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

export const ListItems = ({
  isListItemCompleted,
  listItemInputText,
  listItems,
  idxListItem,
  idxList,
}) => {
  const { dispatch } = useContext(Context)

  const toggleListItemStateById = (idxListItem) => {
    dispatch({
      type: 'TOGGLE_LIST_ITEMS',
      payload: { idxList, idxListItem, listItems },
    })
  }

  return (
    <>
      <ListItem>
        <ListItemLabel
          isListItemCompleted={isListItemCompleted}
          htmlFor={`check${idxListItem}`}
        >
          <Checkbox
            type='checkbox'
            id={`check${idxListItem}`}
            onChange={() => toggleListItemStateById(idxListItem)}
            defaultChecked={isListItemCompleted}
          />
          <CheckboxStyled></CheckboxStyled>
          {listItemInputText}
        </ListItemLabel>
      </ListItem>
    </>
  )
}
