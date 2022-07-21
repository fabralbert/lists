import React from 'react'
import './ListItems.scss'

export const ListItems = ({
  idx,
  isListItemCompleted,
  listItemInputText,
  listItems,
  setListItems,
}) => {
  const toggleListItemStateById = (idx) => {
    setListItems(
      listItems.map((listItem) => {
        if (idx !== listItem.idx) return listItem
        return {
          ...listItem,
          isListItemCompleted: !listItem.isListItemCompleted,
        }
      })
    )
  }
  return (
    <>
      <div className='list-item'>
        <label
          className={`list-item__label${
            isListItemCompleted ? ' list-item__disabled' : ''
          }`}
          htmlFor={`check${idx}`}
        >
          <input
            className='checkbox'
            type='checkbox'
            id={`check${idx}`}
            onChange={() => toggleListItemStateById(idx)}
            defaultChecked={isListItemCompleted}
          />
          <span className='checkbox-styled'></span>
          {listItemInputText}
        </label>
      </div>
    </>
  )
}
