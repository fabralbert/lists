import { useState } from 'react'
import { ListTitle } from './ListTitle'
import { ListItemsForm } from './ListItemsForm/ListItemsForm'
import { ListItems } from './ListItems/ListItems'
import './Lists.scss'

export const Lists = ({ listTitle, idx }) => {
  const [listItems, setListItems] = useState([])
  const [listItemInputText, setlistItemInputText] = useState('')
  const [toggleList, setToggleList] = useState(false)
  const [toggleInputToAddListItems, setToggleInputToAddListItems] =
    useState(false)

  const handleInput = () => {
    setToggleInputToAddListItems(!toggleInputToAddListItems)
  }

  const addListItem = () => {
    setListItems([
      {
        listItemInputText,
        idx: new Date(),
        completed: false,
      },
      ...listItems,
    ])
  }

  const handleSubmitListItem = (e) => {
    e.preventDefault()
    addListItem()
    setlistItemInputText('')
  }

  const addedById = (idx, listItem) => {
    if (idx !== listItem.idx) return listItem
    return {
      ...listItem,
      completed: !listItem.completed,
    }
  }

  const toggleStateById = (idx) => {
    setListItems(listItems.map((listItem) => addedById(idx, listItem)))
  }

  const openListItems = () => {
    setToggleList(!toggleList)
  }

  return (
    <>
      <div className='lists'>
        <ListTitle
          listTitle={listTitle}
          idx={idx}
          toggleList={toggleList}
          listItems={listItems}
          openListItems={openListItems}
        />
        {toggleList && (
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
                  handleSubmitListItem={handleSubmitListItem}
                  toggleStateById={toggleStateById}
                />
              )}
              {listItems.map((item) => (
                <ListItems
                  key={item.idx}
                  idx={item.idx}
                  completed={item.completed}
                  listItemInputText={item.listItemInputText}
                  toggleStateById={toggleStateById}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
