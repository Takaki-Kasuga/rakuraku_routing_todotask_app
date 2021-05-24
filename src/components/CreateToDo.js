import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createToDo } from '../actions/index'



export const CreateToDo = (props) => {
  const history = useHistory()
  console.log(props)
  // const { createToDo } = props
  const dispatch = useDispatch()


  const [newName, setNewName] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newToDoDetail, setNewToDoDetail] = useState('')
  const [newDeadline, setNewDeadline] = useState('')
  const [newStartDate, setNewStartDate] = useState('')

  const createTicketTitle = (e) => {
    setNewTitle(e.target.value)
  }

  const createNewName = (e) => {
    setNewName(e.target.value)
  }
  const createToDoDetail = (e) => {
    setNewToDoDetail(e.target.value)
  }
  const createDeadline = (e) => {
    setNewDeadline(e.target.value)
  }
  const createStartDate = (e) => {
    setNewStartDate(e.target.value)
  }


  return (
    <BrowserRouter>
      <h1>チケット作成画面</h1>
      <div>
        <div>
          <h3>チケット名</h3>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={createTicketTitle} />
          <p>現在のチケット名称： {newTitle}</p>
        </div>
        <div>
          <h3>詳細</h3>
          <TextField id="standard-basic" label="Standard" onChange={createToDoDetail} />
          <p>タスクの詳細：{newToDoDetail}</p>
        </div>
        <div>
          <h3>担当者</h3>
          <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            onChange={createNewName}
          />
          <p>現在の担当者名称： {newName}</p>
        </div>
        <div>
          <h3>期日</h3>
          <TextField
            onChange={createDeadline}
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p>指定した締め切り：{newDeadline}</p>
        </div>
        <div>
          <h3>スタート</h3>
          <TextField
            onChange={createStartDate}
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p>始まりの日時：{newStartDate}</p>
        </div>
      </div>
      <div>
        <Button onClick={() => {
          history.push('/')
          dispatch(createToDo({ title: newTitle, name: newName, detail: newToDoDetail, deadline: newDeadline, startDate: newStartDate }))
        }} variant="contained" color="primary">
          <Link>送信する</Link>
        </Button>
      </div>
    </BrowserRouter >
  )
}