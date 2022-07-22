import { v4 as uuid } from 'uuid'

export const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LISTS':
      return [
        {
          listTitle: action.payload.listTitle,
          idx: uuid(),
          isListOpened: false,
          listItems: [],
        },
        ...state,
      ]
    case 'TOGGLE_LISTS':
      return state.map((list) => {
        if (action.payload.idx !== list.idx) {
          return { ...list, isListOpened: false }
        }
        return {
          ...list,
          isListOpened: !list.isListOpened,
        }
      })
    case 'ADD_LIST_ITEMS':
      return state.map((list) => {
        if (action.payload.idx !== list.idx) return list
        return {
          ...list,
          listItems: [
            {
              listItemInputText: action.payload.listItemInputText,
              idx: uuid(),
              isListItemCompleted: false,
            },
            ...action.payload.listItems,
          ],
        }
      })
    case 'TOGGLE_LIST_ITEMS':
      const listsItemsNew = action.payload.listItems.map((listItem) => {
        if (action.payload.idxListItem !== listItem.idx) return listItem
        return {
          ...listItem,
          isListItemCompleted: !listItem.isListItemCompleted,
        }
      })

      return state.map((list) => {
        if (action.payload.idxList !== list.idx) return list
        return {
          ...list,
          listItems: [...listsItemsNew],
        }
      })
    case 'CLEAR_COMPLETED_LIST_ITEMS':
      const listItemsFiltered = action.payload.listItems.filter(
        (listItem) => !listItem.isListItemCompleted
      )

      return state.map((list) => {
        if (action.payload.idx !== list.idx) return list
        return {
          ...list,
          listItems: [...listItemsFiltered],
        }
      })

    default:
      return state
  }
}
