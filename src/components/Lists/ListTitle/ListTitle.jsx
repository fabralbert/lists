import React from 'react'
import { useContext, useState } from 'react'

import { Context } from '../../../context'
import { Modal } from '../../Modal'
import './ListTitle.scss'

export const ListTitle = ({ idx, toggleList, listTitle, listItems }) => {
  const { lists, setLists } = useContext(Context)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isDontAskCheckbox, setIsDontAskCheckbox] = useState(false)

  const openModal = () => {
    const modalStorage = localStorage.getItem('dontAsk')
    if (modalStorage) {
      const listItemsFiltered = listItems.filter(
        (listItem) => !listItem.isListItemCompleted
      )

      setLists(
        lists.map((list) => {
          if (idx !== list.idx) return list
          return {
            ...list,
            listItems: [...listItemsFiltered],
          }
        })
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
          idx={idx}
          listTitle={listTitle}
          listItems={listItems}
          lists={lists}
          setLists={setLists}
          setIsModalOpened={setIsModalOpened}
          setIsDontAskCheckbox={setIsDontAskCheckbox}
          isDontAskCheckbox={isDontAskCheckbox}
        />
      )}
    </>
  )
}
