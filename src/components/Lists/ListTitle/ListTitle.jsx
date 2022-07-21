import React from 'react'
import './ListTitle.scss'
import { useContext } from 'react'
import { Context } from '../../../context'
import { useState } from 'react'
import { Modal } from '../../Modal'

export const ListTitle = ({
  idx,
  toggleList,
  listItems,
  setListItems,
  listTitle,
}) => {
  const { lists, setLists } = useContext(Context)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isDontAskCheckbox, setIsDontAskCheckbox] = useState(false)

  const openModal = () => {
    const modalStorage = localStorage.getItem('dontAsk')
    if (modalStorage) {
      setListItems(
        [...listItems].filter((listItem) => !listItem.isListItemCompleted)
      )
      return
    }
    setIsModalOpened(true)
  }

  const toggleListsStateById = (idx) => {
    setLists(
      lists.map((list) => {
        if (idx !== list.idx) return { ...list, isListOpened: false }
        return {
          ...list,
          isListOpened: !list.isListOpened,
        }
      })
    )
  }

  return (
    <>
      <div className='list-header'>
        <h2
          className={`list-header__title ${
            toggleList ? '' : 'list-header__title_hidden'
          }`}
          onClick={() => toggleListsStateById(idx)}
        >
          {`${listTitle} `}
          <span
            className={`lists__count${
              toggleList ? '' : ' lists__count_hidden'
            }`}
          >
            {listItems.length}
          </span>
        </h2>
        <button
          className={`list-header__button ${
            toggleList ? '' : 'list-header__button_hidden'
          }`}
          onClick={openModal}
        >
          Clean
        </button>
      </div>
      {isModalOpened && (
        <Modal
          listTitle={listTitle}
          listItems={listItems}
          setListItems={setListItems}
          setIsModalOpened={setIsModalOpened}
          setIsDontAskCheckbox={setIsDontAskCheckbox}
          isDontAskCheckbox={isDontAskCheckbox}
        />
      )}
    </>
  )
}
