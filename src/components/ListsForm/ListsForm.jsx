import './ListsForm.scss'
import { v4 as uuid } from 'uuid'
import { useContext } from 'react'
import { Context } from '../../context'

export const ListsForm = () => {
  const { lists, setLists, listTitle, setListTitle } = useContext(Context)

  const addList = (listTitle) => {
    setLists([
      {
        listTitle,
        idx: uuid(),
        isListOpened: false,
      },
      ...lists,
    ])
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
