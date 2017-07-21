// Add new GET_TODOS constant
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, GET_TODOS } from '../constants/ActionTypes'

// Initial state is not needed anymore
const initialState = [
  // {
  //   text: 'Use Redux',
  //   completed: false,
  //   id: 0
  // }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    // Now as todo data is stored to server, we need to update whole state
    case GET_TODOS:
      return [ ...action.data ]

    case ADD_TODO:
      return [
        {
          // Id will come with action payload
          // id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          id: action.id,
          completed: action.completed,
          text: action.text
        },
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          // No more toggling, completed state comes with action payload
          // { ...todo, completed: !todo.completed } :
          { ...todo, completed: action.completed } :          
          todo
      )

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
