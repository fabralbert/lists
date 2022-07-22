import React from 'react'
import { useContext } from 'react'

import { Context } from '../../../context'
import './ListItems.scss'

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
      <div className='list-item'>
        <label
          className={`list-item__label${
            isListItemCompleted ? ' list-item__disabled' : ''
          }`}
          htmlFor={`check${idxListItem}`}
        >
          <input
            className='checkbox'
            type='checkbox'
            id={`check${idxListItem}`}
            onChange={() => toggleListItemStateById(idxListItem)}
            defaultChecked={isListItemCompleted}
          />
          <span className='checkbox-styled'></span>
          {listItemInputText}
        </label>
      </div>
    </>
  )
}
