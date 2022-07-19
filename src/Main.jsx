import './Main.scss'
import { useState } from 'react'
import { Lists } from './components/Lists'
import { ListsForm } from './components/ListsForm'

function Main() {
  const [lists, setLists] = useState([])
  const [listTitle, setListTitle] = useState('')

  return (
    <div className='main'>
      <div className='container'>
        <h1 className='title'>My lists</h1>
        <ListsForm
          listTitle={listTitle}
          setListTitle={setListTitle}
          lists={lists}
          setLists={setLists}
        />
        {lists.map((item) => (
          <Lists listTitle={item.listTitle} idx={item.idx} />
        ))}
      </div>
    </div>
  )
}

export default Main
