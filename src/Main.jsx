import { useState, useReducer } from 'react'

import { Lists } from './components/Lists'
import { ListsForm } from './components/ListsForm'
import { Context } from './context'
import { listReducer } from './reducer'
import './Main.scss'

function Main() {
  const [listTitle, setListTitle] = useState('')
  const [lists, dispatch] = useReducer(listReducer, [])

  return (
    <Context.Provider
      value={{
        lists,
        listTitle,
        setListTitle,
        dispatch,
      }}
    >
      <div className='main'>
        <div className='container'>
          <h1 className='title'>My lists</h1>
          <ListsForm />
          {lists.map((item) => (
            <Lists
              key={item.idx}
              listTitle={item.listTitle}
              idx={item.idx}
              isListOpened={item.isListOpened}
              listItems={item.listItems}
            />
          ))}
        </div>
      </div>
    </Context.Provider>
  )
}

export default Main
