
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToDo, completeToDo, backToDo } from '../actions/index'


export const Home = (childProps) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.todoList)
  // const { props } = childProps
  console.log(childProps)
  return (
    <>
      <h1>一覧画面</h1>
      <div>
        <h3>未完了のタスク</h3>
        <ul>
          {state.map((todo, index) => {
            console.log(todo)
            if (todo.flag) {
              return (
                <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <p>ID：{index + 1}</p>

                  <p>タイトル：{todo.title}</p>
                  <p>名前：{todo.name}</p>
                  <Button variant="contained" onClick={() => { dispatch(completeToDo(index)) }} >完了</Button>
                  <Button onClick={() => { dispatch(deleteToDo(index)) }} variant="contained" color="secondary">
                    削除</Button>
                  <Button variant="contained">
                    <Link to={`/todo-details/${index + 1}`}>詳細画面へ</Link>
                  </Button>
                </li>
              )
            }
          })}
        </ul>
      </div>
      <div>
        <h3>完了のタスク</h3>
        <ul>
          {state.map((todo, index) => {
            console.log(todo)
            if (!todo.flag) {
              return (
                <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <p>ID：{index + 1}</p>

                  <p>タイトル：{todo.title}</p>
                  <p>名前：{todo.name}</p>
                  <Button onClick={() => {
                    dispatch(backToDo(index))
                  }} variant="contained">戻す</Button>
                  <Button variant="contained">
                    <Link to={`/todo-details/${index + 1}`}>詳細画面へ</Link>
                  </Button>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </>
  )
}