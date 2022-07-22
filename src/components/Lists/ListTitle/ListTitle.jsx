import React from 'react'
import { useContext, useState } from 'react'

import { Context } from '../../../context'
import { Modal } from '../../Modal'
import './ListTitle.scss'

export const ListTitle = ({ idx, toggleList, listTitle, listItems }) => {
  const { dispatch } = useContext(Context)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isDontAskCheckbox, setIsDontAskCheckbox] = useState(false)

  const openModal = () => {
    const modalStorage = localStorage.getItem('dontAsk')
    if (modalStorage) {
      dispatch({
        type: 'CLEAR_COMPLETED_LIST_ITEMS',
        payload: { idx, listItems },
      })
      return
    }
    setIsModalOpened(true)
  }

  const toggleListsStateById = (idx) => {
    dispatch({
      type: 'TOGGLE_LISTS',
      payload: { idx },
    })
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
          dispatch={dispatch}
          idx={idx}
          listTitle={listTitle}
          listItems={listItems}
          setIsModalOpened={setIsModalOpened}
          setIsDontAskCheckbox={setIsDontAskCheckbox}
          isDontAskCheckbox={isDontAskCheckbox}
        />
      )}
    </>
  )
}
