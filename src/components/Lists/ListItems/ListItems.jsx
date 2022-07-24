import React from 'react'
import { useContext } from 'react'

import { Context } from '../../../context/context'

import { ListItem, ListItemLabel, CheckboxStyled, Checkbox } from './styles.js'

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
      <ListItem>
        <ListItemLabel
          isListItemCompleted={isListItemCompleted}
          htmlFor={`check${idxListItem}`}
        >
          <Checkbox
            type='checkbox'
            id={`check${idxListItem}`}
            onChange={() => toggleListItemStateById(idxListItem)}
            defaultChecked={isListItemCompleted}
          />
          <CheckboxStyled></CheckboxStyled>
          {listItemInputText}
        </ListItemLabel>
      </ListItem>
    </>
  )
}
