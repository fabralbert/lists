import React from 'react'
import './ListTitle.scss'

export const ListTitle = ({
  listTitle,
  idx,
  toggleList,
  openListItems,
  listItems,
}) => {
  return (
    <div>
      <h2
        className={`list__title ${toggleList ? '' : 'list__title_hidden'}`}
        onClick={openListItems}
        key={idx}
      >
        {`${listTitle} `}
        <span
          className={`lists__count${toggleList ? '' : ' lists__count_hidden'}`}
        >
          {listItems.length}
        </span>
      </h2>
    </div>
  )
}
