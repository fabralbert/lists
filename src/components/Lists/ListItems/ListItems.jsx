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
  const { lists, setLists } = useContext(Context)

  const toggleListItemStateById = (idxListItem) => {
    const listsItemsNew = listItems.map((listItem) => {
      if (idxListItem !== listItem.idx) return listItem
      return {
        ...listItem,
        isListItemCompleted: !listItem.isListItemCompleted,
      }
    })

    setLists(
      lists.map((list) => {
        if (idxList !== list.idx) return list
        return {
          ...list,
          listItems: [...listsItemsNew],
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
