import { useState, useReducer, useEffect } from 'react'
import styled from 'styled-components'

import { Lists } from './components/Lists'
import { ListsForm } from './components/ListsForm'
import { Context } from './context/context'
import { listReducer } from './reducer/reducer'

// import { Container } from './components/styles/Container.styled'
import { GlobalStyles } from './components/styles/Global'
import { Container, StyledMain, Header } from './components/styles/styles'

// styled-components

function Main() {
  const [listTitle, setListTitle] = useState('')
  const [lists, dispatch] = useReducer(
    listReducer,
    JSON.parse(localStorage.getItem('Lists')) || []
  )

  useEffect(() => {
    localStorage.setItem('Lists', JSON.stringify(lists))
  }, [lists])

  return (
    <Context.Provider
      value={{
        lists,
        listTitle,
        setListTitle,
        dispatch,
      }}
    >
      <GlobalStyles />
      <StyledMain>
        <Container>
          <Header>My lists</Header>
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
        </Container>
      </StyledMain>
    </Context.Provider>
  )
}

export default Main
