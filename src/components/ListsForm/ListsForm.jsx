import { useContext } from 'react'

import { Context } from '../../context'
import './ListsForm.scss'

export const ListsForm = () => {
  const { listTitle, setListTitle, dispatch } = useContext(Context)

  const addList = (listTitle) => {
    dispatch({
      type: 'ADD_LISTS',
      payload: { listTitle },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addList(listTitle)
    setListTitle('')
  }

  return (
    <form className='lists-form'>
      <div className='lists-form__item'>
        <div className='list-form__inner'>
          <input
            className='lists-form__input'
            type='text'
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            placeholder='New list'
          />
          <button
            className={`lists-form__button${
              listTitle ? ' lists-form__button_active' : ''
            }`}
            onClick={handleSubmit}
            disabled={!listTitle}
          >
            + Add
          </button>
        </div>
      </div>
    </form>
  )
}
