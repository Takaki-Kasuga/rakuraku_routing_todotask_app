import { CREATETODO, DELETETODO, COMPLETETODO } from '../actions/index'

const initialState = []


export default (state = initialState, action) => {
  console.log('reducersが発火')
  console.log(action)
  switch (action.type) {
    case CREATETODO:
      const newToDoArray = [...state, action.newToDo];
      console.log(newToDoArray)
      return newToDoArray

    case DELETETODO:
      console.log('DELETETODO')
      const newToDoDelete = [...state];
      console.log(newToDoDelete)
      newToDoDelete.splice(action.indexNum, 1)
      return newToDoDelete

    case COMPLETETODO:


    default:
      return state
  }
}