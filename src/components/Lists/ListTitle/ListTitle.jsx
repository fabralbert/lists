import React from 'react'
import { useContext, useState } from 'react'
import Cookies from 'universal-cookie'

import { Context } from '../../../context/context'
import { Modal } from '../../Modal'

import {
  ListHeader,
  ListHeaderTitle,
  ListsCount,
  ListHeaderButtonClean,
  ListHeaderButtonDelete,
  VelticalLine,
} from './styles.js'

export const ListTitle = ({ idx, toggleList, listTitle, listItems }) => {
  const { dispatch } = useContext(Context)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isDontAskCheckbox, setIsDontAskCheckbox] = useState(false)

  const cookies = new Cookies()

  const openModal = () => {
    const modalCookie = cookies.get('idtest')
    if (modalCookie) {
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

  const deleteList = (idx) => {
    dispatch({
      type: 'DELETE_LIST',
      payload: { idx },
    })
  }

  return (
    <>
      <ListHeader>
        <ListHeaderTitle
          toggleList={toggleList}
          onClick={() => toggleListsStateById(idx)}
        >
          {`${listTitle} `}
          <ListsCount toggleList={toggleList}>{listItems.length}</ListsCount>
        </ListHeaderTitle>
        <ListHeaderButtonClean toggleList={toggleList} onClick={openModal}>
          Clean
        </ListHeaderButtonClean>
        <VelticalLine toggleList={toggleList}></VelticalLine>
        <ListHeaderButtonDelete
          toggleList={toggleList}
          onClick={() => deleteList(idx)}
        >
          Del
        </ListHeaderButtonDelete>
      </ListHeader>
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
