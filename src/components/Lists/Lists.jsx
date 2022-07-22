import { useState, useRef } from 'react'

import { ListTitle } from './ListTitle'
import { ListItemsForm } from './ListItemsForm/ListItemsForm'
import { ListItems } from './ListItems/ListItems'
import './Lists.scss'

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
      <div className='lists'>
        <ListTitle
          listTitle={listTitle}
          idx={idx}
          toggleList={isListOpened}
          listItems={listItems}
        />
        {isListOpened && (
          <div className='lists__inner'>
            <input
              className='list__button'
              type='submit'
              value='+ List item'
              onClick={handleInput}
            />
            <div className='list-items'>
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
            </div>
          </div>
        )}
      </div>
    </>
  )
}
