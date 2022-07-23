import { useContext } from 'react'
import styled from 'styled-components'

import { Context } from '../../context/context'
// import './ListsForm.scss'

const ListsFormItem = styled.div`
  position: relative;
  margin-top: 16px;
`

const ListsFormInner = styled.div`
  background-color: #fff;
  border-radius: 8px;
`

const ListsFormInput = styled.input`
  margin: 0;
  width: 70%;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  padding-left: 16px;
  outline: none;
  border-radius: 8px;
`

const ListsFormButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  right: 16px;
  top: 16px;
  background-color: #fff;
  border: none;
  color: rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.listTitle &&
    `
  right: 6px;
  top: 6px;
  padding: 10px 8px;
  background-color: #80c890;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`}
`

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
