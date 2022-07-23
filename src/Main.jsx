import { useState, useReducer, useEffect } from 'react'
import styled from 'styled-components'

import { Lists } from './components/Lists'
import { ListsForm } from './components/ListsForm'
import { Context } from './context/context'
import { listReducer } from './reducer/reducer'

import { Container } from './components/styles/Container.styled'

import { GlobalStyles } from './components/styles/Global'

// styled-components
const StyledMain = styled.div`
  background-color: #fef6f4;
  min-height: 100vh;
  font-size: 28px;
`

const Header = styled.h1`
  margin: 0;
  font-size: 28px;
`

function Main() {
  const [listTitle, setListTitle] = useState('')
  const [lists, dispatch] = useReducer(
    listReducer,
    JSON.parse(localStorage.getItem('dontAsk')) || []
  )

  useEffect(() => {
    localStorage.setItem('dontAsk', JSON.stringify(lists))
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
