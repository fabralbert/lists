import React from 'react'
import { useContext, useState } from 'react'
import Cookies from 'universal-cookie'
import styled from 'styled-components'

import { Context } from '../../../context/context'
import { Modal } from '../../Modal'

const ListHeader = styled.div`
  position: relative;
`
const ListHeaderTitle = styled.h2`
  margin: 0;
  margin-top: 14px;
  background-color: #ff6a55;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  padding: 16px;
  color: #ffffff;
  max-width: 100%;
  word-wrap: break-word;
  ${(props) =>
    props.toggleList &&
    `
    background-color: #fff;
    color: #000000;
    `}
`

const ListsCount = styled.span`
  color: rgba(255, 255, 255, 0.8);
  ${(props) =>
    props.toggleList &&
    `
    color: rgba(0, 0, 0, 0.4);
    `}
`

const ListHeaderButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  border: none;
  background-color: #ff6a55;
  cursor: pointer;
  ${(props) =>
    props.toggleList &&
    `
    background-color: #fff;
    color: rgba(0, 0, 0, 0.2);
    `}
`

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
        <ListHeaderButton toggleList={toggleList} onClick={openModal}>
          Clean
        </ListHeaderButton>
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
