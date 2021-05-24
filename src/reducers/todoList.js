import { CREATETODO, DELETETODO, COMPLETETODO, BACKTODO } from '../actions/index'

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
      console.log('COMPLETETODO')
      const newToDoComplete = [...state];
      newToDoComplete[action.indexNum].flag = false
      return newToDoComplete

    case BACKTODO:
      console.log('COMPLETETODO')
      const newToDoBack = [...state];
      newToDoBack[action.indexNum].flag = true
      return newToDoBack

    default:
      console.log('default')
      return state
  }
}