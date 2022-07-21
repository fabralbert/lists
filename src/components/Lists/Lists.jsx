import { useState } from 'react'
import { ListTitle } from './ListTitle'
import { ListItemsForm } from './ListItemsForm/ListItemsForm'
import { ListItems } from './ListItems/ListItems'
import './Lists.scss'

export const Lists = ({ listTitle, idx, isListOpened }) => {
  const [listItems, setListItems] = useState([])
  const [listItemInputText, setlistItemInputText] = useState('')
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
          setListItems={setListItems}
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
                  listItems={listItems}
                  setListItems={setListItems}
                />
              )}
              {listItems.map((item) => (
                <ListItems
                  key={item.idx}
                  idx={item.idx}
                  isListItemCompleted={item.isListItemCompleted}
                  listItemInputText={item.listItemInputText}
                  listItems={listItems}
                  setListItems={setListItems}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
