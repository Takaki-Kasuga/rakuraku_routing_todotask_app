export const CREATETODO = 'createToDo'
export const DELETETODO = 'deleteToDo'
export const COMPLETETODO = 'completeToDo'
export const BACKTODO = 'backToDo'


export const createToDo = (newToDo) => {
  console.log('actions：createToDo')
  console.log(newToDo)
  return (
    {
      type: CREATETODO,
      newToDo: {
        flag: true,
        title: newToDo.title,
        detail: newToDo.detail,
        name: newToDo.name,
        deadline: newToDo.deadline,
        startDate: newToDo.startDate,
      }
    }
  )
}

export const deleteToDo = (indexNum) => {
  console.log('actions：deleteToDo')
  console.log(indexNum)
  return (
    {
      type: DELETETODO,
      indexNum: indexNum
    }
  )
}

export const completeToDo = (indexNum) => {
  console.log('actions：completeTask')
  console.log(indexNum)
  return (
    {
      type: COMPLETETODO,
      indexNum: indexNum
    }
  )
}

export const backToDo = (indexNum) => {
  console.log('actions：completeTask')
  console.log(indexNum)
  return (
    {
      type: BACKTODO,
      indexNum: indexNum
    }
  )
}