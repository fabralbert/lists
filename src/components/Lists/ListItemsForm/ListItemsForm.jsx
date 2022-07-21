import React from 'react'
import './ListItemsForm.scss'
import { v4 as uuid } from 'uuid'

export const ListItemsForm = ({
  listItemInputText,
  setlistItemInputText,
  setListItems,
  listItems,
}) => {
  const addListItem = () => {
    setListItems([
      {
        listItemInputText,
        idx: uuid(),
        isListItemCompleted: false,
      },
      ...listItems,
    ])
  }

  const handleSubmitListItem = (e) => {
    e.preventDefault()
    addListItem()
    setlistItemInputText('')
  }
  return (
    <form className='list-items-form'>
      <input
        className='list-items-form__input'
        type='text'
        value={listItemInputText}
        onChange={(e) => setlistItemInputText(e.target.value)}
      />
      <button
        className={`list-items-form__button${
          listItemInputText ? '' : ' list-items-form__button_active'
        }`}
        onClick={handleSubmitListItem}
        disabled={!listItemInputText}
      ></button>
    </form>
  )
}
