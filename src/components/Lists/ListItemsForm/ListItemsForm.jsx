import React from 'react'
import './ListItemsForm.scss'

export const ListItemsForm = ({
  listItemInputText,
  setlistItemInputText,
  handleSubmitListItem,
}) => {
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
