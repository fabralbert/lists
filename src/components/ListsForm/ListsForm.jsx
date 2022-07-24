import { useContext } from 'react'

import { Context } from '../../context/context'

import {
  ListsFormItem,
  ListsFormInner,
  ListsFormInput,
  ListsFormButton,
} from './styles.js'

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
    <form>
      <ListsFormItem>
        <ListsFormInner>
          <ListsFormInput
            type='text'
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            placeholder='New list'
          />
          <ListsFormButton
            listTitle={listTitle}
            onClick={handleSubmit}
            disabled={!listTitle}
          >
            + Add
          </ListsFormButton>
        </ListsFormInner>
      </ListsFormItem>
    </form>
  )
}
