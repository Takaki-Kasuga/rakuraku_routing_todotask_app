import './App.css';
// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Switch, Route, Link, useParams, useLocation } from 'react-router-dom'
import { CreateToDo } from './components/CreateToDo'
import { TodoDetails } from './components/TodoDetails'
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createToDo, deleteToDo, completeToDo, backToDo } from './actions/index'
import { useState } from 'react'
import { Home } from './components/Home'


const App = (props) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.todoList)
  console.log(state)

  return (
    <React.Fragment>
      <div className="App">
        <h1>ToDoリスト</h1>
        <BrowserRouter>
          <Button variant="contained">
            <Link to="/">一覧画面に戻る</Link>
          </Button>
          <Button variant="contained">
            <Link to="/create-todo">チケットの作成</Link>
          </Button>
          <Switch>
            <Route path="/create-todo">
              <CreateToDo></CreateToDo>
            </Route>
            <Route path="/todo-details/:id">
              <TodoDetails>
              </TodoDetails>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </React.Fragment >
  );
}

export default App
