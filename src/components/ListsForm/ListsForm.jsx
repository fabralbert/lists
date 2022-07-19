import './ListsForm.scss'

export const ListsForm = ({ listTitle, setListTitle, lists, setLists }) => {
  const addTodoList = (listTitle) => {
    setLists([
      ...lists,
      {
        listTitle,
        idx: new Date(),
      },
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodoList(listTitle)
    setListTitle('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form className='lists-form'>
      <div className='lists-form__item'>
        <input
          className='lists-form__input'
          type='text'
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
          onKeyPress={handleKeyPress}
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
    </form>
  )
}
