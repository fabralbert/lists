import { useState, useRef } from 'react'

import { ListTitle } from './ListTitle'
import { ListItemsForm } from './ListItemsForm/ListItemsForm'
import { ListItems } from './ListItems/ListItems'

import { ListsBox, ListsInner, ListsButton, ListItemsBox } from './styles.js'

export const Lists = ({ listTitle, idx, isListOpened, listItems }) => {
  const [listItemInputText, setlistItemInputText] = useState('')
  const inputToAddListItemRef = useRef()

  const [toggleInputToAddListItems, setToggleInputToAddListItems] =
    useState(false)

  const handleInput = () => {
    setToggleInputToAddListItems(!toggleInputToAddListItems)
  }
  return (
    <>
      <ListsBox>
        <ListTitle
          listTitle={listTitle}
          idx={idx}
          toggleList={isListOpened}
          listItems={listItems}
        />
        {isListOpened && (
          <ListsInner>
            <ListsButton
              type='submit'
              value='+ List item'
              onClick={handleInput}
            />
            <ListItemsBox>
              {toggleInputToAddListItems && (
                <ListItemsForm
                  listItemInputText={listItemInputText}
                  setlistItemInputText={setlistItemInputText}
                  idx={idx}
                  listItems={listItems}
                  inputToAddListItemRef={inputToAddListItemRef}
                />
              )}
              {listItems.map((item) => (
                <ListItems
                  key={item.idx}
                  idxListItem={item.idx}
                  idxList={idx}
                  isListItemCompleted={item.isListItemCompleted}
                  listItemInputText={item.listItemInputText}
                  listItems={listItems}
                />
              ))}
            </ListItemsBox>
          </ListsInner>
        )}
      </ListsBox>
    </>
  )
}
