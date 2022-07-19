import React from 'react'
import './ListItems.scss'

export const ListItems = ({
  idx,
  completed,
  listItemInputText,
  toggleStateById,
}) => {
  return (
    <>
      <div className='list-item' key={idx}>
        <label
          className={`list-item__label${
            completed ? ' list-item__disabled' : ''
          }`}
          htmlFor={`check${idx}`}
        >
          <input
            className='checkbox'
            type='checkbox'
            id={`check${idx}`}
            onChange={() => toggleStateById(idx)}
            defaultChecked={completed}
          />
          <span className='checkbox-styled'></span>
          {listItemInputText}
        </label>
      </div>
    </>
  )
}
