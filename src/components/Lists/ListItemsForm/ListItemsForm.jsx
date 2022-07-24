import React from 'react'
import { useEffect, useContext } from 'react'

import { Context } from '../../../context/context'

import { ListItemsFormInput, ListItemsFormButton } from './styles.js'

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
