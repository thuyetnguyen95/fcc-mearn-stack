import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import UserList from './components/user-list.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user/create" component={CreateUser} />
      <Route path="/users" component={UserList} />
    </Router>
  );
}

export default App;
