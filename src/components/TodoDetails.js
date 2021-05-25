import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'



export const TodoDetails = () => {
  const state = useSelector((state) => state.todoList)
  const { id } = useParams()
  return (
    <React.Fragment>
      <h1>チケット詳細表示（Todo表示）</h1>
      <div>
        <ul>
          <li>チケット名：{state[id - 1].title}</li>
          <li>詳細：{state[id - 1].detail}</li>
          <li>担当者名：{state[id - 1].name}</li>
          <li>締め切り期日：{state[id - 1].deadline}</li>
          <li>開始日：{state[id - 1].startDate}</li>
        </ul>
      </div>
    </React.Fragment>
  )
}