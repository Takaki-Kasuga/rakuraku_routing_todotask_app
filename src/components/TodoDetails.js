import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom'


export const TodoDetails = (props) => {
  const { id } = useParams()
  console.log(id)
  console.log('TodoDetailsが発火')
  const { todos } = props
  console.log(todos)
  return (
    <React.Fragment>
      <h1>チケット詳細表示（Todo表示）</h1>
      <div>
        <ul>
          <li>チケット名：{todos[id - 1].title}</li>
          <li>詳細：{todos[id - 1].detail}</li>
          <li>担当者名：{todos[id - 1].name}</li>
          <li>締め切り期日：{todos[id - 1].deadline}</li>
          <li>開始日：{todos[id - 1].startDate}</li>
        </ul>
      </div>
    </React.Fragment>
  )
}