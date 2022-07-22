import React from 'react'
import './Modal.scss'

export const Modal = ({
  idx,
  listItems,
  setIsModalOpened,
  listTitle,
  isDontAskCheckbox,
  setIsDontAskCheckbox,
  dispatch,
}) => {
  const clearCompletedListItems = () => {
    if (isDontAskCheckbox) {
      localStorage.setItem('dontAsk', 1)
    }

    dispatch({
      type: 'CLEAR_COMPLETED_LIST_ITEMS',
      payload: { idx, listItems },
    })
    setIsModalOpened(false)
  }

  const declineModal = () => {
    if (isDontAskCheckbox) {
      localStorage.setItem('dontAsk', 1)
    }

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
    <div className='modal' onClick={closeModal}>
      <div className='modal__inner' onClick={stopPropagationModal}>
        <div className='modal__title'>
          Do you want to remove all completed items from {listTitle}?
        </div>
        <div className='modal__body'>
          <label htmlFor={`asking${idx}`} className='modal__body-label'>
            <input
              className='modal__body-checkbox'
              type='checkbox'
              id={`asking${idx}`}
              onChange={toggleModalCheckmarkState}
              defaultChecked={isDontAskCheckbox}
            />
            <span className='modal__body-checkbox__styled'></span>
            Don't ask me again
          </label>
        </div>
        <div className='modal__footer'>
          <button className='modal__footer-btn__decline' onClick={declineModal}>
            NO
          </button>
          <button
            className='modal__footer-btn__accept'
            onClick={clearCompletedListItems}
          >
            YES
          </button>
        </div>
      </div>
    </div>
  )
}
