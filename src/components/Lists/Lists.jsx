import { useState, useRef } from 'react'
import styled from 'styled-components'

import { ListTitle } from './ListTitle'
import { ListItemsForm } from './ListItemsForm/ListItemsForm'
import { ListItems } from './ListItems/ListItems'

const ListsBox = styled.div`
  background-color: #fff;
  border-radius: 8px;
`

const ListsInner = styled.div`
  padding: 0 16px;
`

const ListsButton = styled.input`
  text-align-last: left;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  padding: 0;
  margin-bottom: 16px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  border-radius: 8px;
  outline: none;
`

const ListItemsBox = styled.div`
  position: relative;
  line-height: 0;
`

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
