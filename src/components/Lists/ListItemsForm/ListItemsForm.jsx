import React from 'react'
import { useEffect, useContext } from 'react'
import { v4 as uuid } from 'uuid'

import { Context } from '../../../context'
import './ListItemsForm.scss'

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

  const { lists, setLists } = useContext(Context)

  const addListItem = (idx) => {
    setLists(
      lists.map((list) => {
        if (idx !== list.idx) return list
        return {
          ...list,
          listItems: [
            {
              listItemInputText,
              idx: uuid(),
              isListItemCompleted: false,
            },
            ...listItems,
          ],
        }
      })
    )
  }

  const handleSubmitListItem = (e, idx) => {
    e.preventDefault()
    addListItem(idx)
    setlistItemInputText('')
  }
  return (
    <form className='list-items-form'>
      <input
        className='list-items-form__input'
        type='text'
        value={listItemInputText}
        onChange={(e) => setlistItemInputText(e.target.value)}
        ref={inputToAddListItemRef}
      />
      <button
        className={`list-items-form__button${
          listItemInputText ? '' : ' list-items-form__button_active'
        }`}
        onClick={(e) => handleSubmitListItem(e, idx)}
        disabled={!listItemInputText}
      ></button>
    </form>
  )
}
