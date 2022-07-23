import React from 'react'
import Cookies from 'universal-cookie'
import styled from 'styled-components'

import acceptBtn from '../../img/accept-btn-black.svg'

const ModalBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(143, 143, 143, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 10;
`

const ModalInner = styled.div`
  max-width: 260px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
`

const ModalTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`
const ModalBodyLabel = styled.label`
  margin-top: 12px;
  font-weight: 600;
  font-size: 12px;
  color: #ff6a55;
  line-height: 20px;
  padding-left: 26px;
  display: block;
`
const ModalBodyCheckboxStyled = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #ff6a55;
  border-radius: 4px;
  margin-left: -26px;
`

const ModalBodyCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  padding: 16px;
  &:checked + ${ModalBodyCheckboxStyled}::before {
    position: absolute;
    content: '';
    width: 19px;
    height: 19px;
    background: url(${acceptBtn}) center no-repeat;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

const ModalFooterBtnDecline = styled.button`
  width: 100px;
  height: 42px;
  background-color: #ff8181;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  font-family: inherit;
  color: #fff;
  cursor: pointer;
`
const ModalFooterBtnAccept = styled.button`
  width: 100px;
  height: 42px;
  background-color: #80c890;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  font-family: inherit;
  color: #fff;
  cursor: pointer;
`

export const Modal = ({
  idx,
  listItems,
  setIsModalOpened,
  listTitle,
  isDontAskCheckbox,
  setIsDontAskCheckbox,
  dispatch,
}) => {
  const cookies = new Cookies()

  const clearCompletedListItems = () => {
    if (isDontAskCheckbox) {
      cookies.set('idtest', '1', { path: '/' })
    }

    dispatch({
      type: 'CLEAR_COMPLETED_LIST_ITEMS',
      payload: { idx, listItems },
    })
    setIsModalOpened(false)
  }

  const closeModal = () => {
    setIsModalOpened(false)
  }

  const toggleModalCheckmarkState = () => {
    setIsDontAskCheckbox(!isDontAskCheckbox)
  }

  const stopPropagationModal = (e) => e.stopPropagation()

  return (
    <ModalBox onClick={closeModal}>
      <ModalInner onClick={stopPropagationModal}>
        <ModalTitle>
          Do you want to remove all completed items from {listTitle}?
        </ModalTitle>
        <ModalBodyLabel htmlFor={`asking${idx}`}>
          <ModalBodyCheckbox
            type='checkbox'
            id={`asking${idx}`}
            onChange={toggleModalCheckmarkState}
            defaultChecked={isDontAskCheckbox}
          />
          <ModalBodyCheckboxStyled></ModalBodyCheckboxStyled>
          Don't ask me again
        </ModalBodyLabel>
        <ModalFooter>
          <ModalFooterBtnDecline onClick={closeModal}>NO</ModalFooterBtnDecline>
          <ModalFooterBtnAccept onClick={clearCompletedListItems}>
            YES
          </ModalFooterBtnAccept>
        </ModalFooter>
      </ModalInner>
    </ModalBox>
  )
}
