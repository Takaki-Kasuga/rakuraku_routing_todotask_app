import './App.css';
// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Switch, Route, Link, useParams, useLocation } from 'react-router-dom'
import { CreateToDo } from './components/CreateToDo'
import { TodoDetails } from './components/TodoDetails'
import * as React from 'react';
import { connect } from 'react-redux'
import { createToDo, deleteToDo, completeToDo, backToDo } from './actions/index'
import { useState } from 'react'
import { Home } from './components/Home'


const App = (props) => {
  console.log(props)

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
              <CreateToDo createToDo={props.createToDo}></CreateToDo>
            </Route>
            <Route path="/todo-details/:id">
              <TodoDetails todos={props.todos}>
              </TodoDetails>
            </Route>
            <Route exact path="/">
              <Home props={props}></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </React.Fragment >
  );
}

const mapStateToProps = (state) => ({
  todos: state.todoList
})

const mapDispatchToProps = (dispatch) => ({
  deleteToDo: (indexNum) => dispatch(deleteToDo(indexNum)),
  createToDo: (newToDo) => dispatch(createToDo(newToDo)),
  completeToDo: (indexNum) => dispatch(completeToDo(indexNum)),
  backToDo: (indexNum) => dispatch(backToDo(indexNum)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
