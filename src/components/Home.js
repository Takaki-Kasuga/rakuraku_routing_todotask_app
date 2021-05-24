
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom'

export const Home = (childProps) => {
  const { props } = childProps
  return (
    <>
      <h1>一覧画面</h1>
      <div>
        <ul>
          {props.todos.map((todo, index) => {
            return (
              <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <p>ID：{index + 1}</p>

                <p>タイトル：{todo.title}</p>
                <p>名前：{todo.name}</p>
                {/* <Button variant="contained">完了</Button> */}
                <Button onClick={() => { props.deleteToDo(index) }} variant="contained" color="secondary">
                  削除</Button>
                <Button variant="contained">
                  <Link to={`/todo-details/${index + 1}`}>詳細画面へ</Link>
                </Button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}