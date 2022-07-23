import React from 'react'
import { useEffect, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'

import { Context } from '../../../context/context'
// import './ListItemsForm.scss'
import acceptBtnActive from '../../../img/accept-btn-black.svg'

const ListItemsFormInput = styled.input`
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

const ListItemsFormButton = styled.button`
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

export const ListItemsForm = ({
  listItemInputText,
  setlistItemInputText,
  listItems,
  inputToAddListItemRef,
  idx,
}) => {
  useEffect(() => {
    inputToAddListItemRef.current.select()
  }, [])

  const { dispatch } = useContext(Context)

  const addListItem = (idx) => {
    dispatch({
      type: 'ADD_LIST_ITEMS',
      payload: { idx, listItemInputText, listItems },
    })
  }

  const handleSubmitListItem = (e, idx) => {
    e.preventDefault()
    addListItem(idx)
    setlistItemInputText('')
  }
  return (
    <form>
      <ListItemsFormInput
        type='text'
        value={listItemInputText}
        onChange={(e) => setlistItemInputText(e.target.value)}
        ref={inputToAddListItemRef}
      />
      <ListItemsFormButton
        listItemInputText={listItemInputText}
        onClick={(e) => handleSubmitListItem(e, idx)}
        disabled={!listItemInputText}
      ></ListItemsFormButton>
    </form>
  )
}
