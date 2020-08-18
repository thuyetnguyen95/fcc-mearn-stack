import React, { Component } from 'react';
import { api } from '../http'
import { Link } from 'react-router-dom'

export default class ExerciseList extends Component {
  constructor() {
    super();

    this.state = {
      exercises: []
    }
  }

  deleteExercise(id) {
    api.delete('exercises/' + id)
    .then(response => {
      console.log(response)
      this.setState({
        exercises: this.state.exercises.filter(ex => ex._id !== id)
      })
    })
  }

  componentDidMount() {
    api.get('exercises')
    .then(exercises => {
      this.setState({
        exercises
      })
    })
  }

  render() {
    const exercises = this.state.exercises.map((exercise, index) => {
      return <Exercise exercise={exercise} deleteExercise={this.deleteExercise} key={index} />
    })

    return (
     <div>{exercises}</div>
    )
  }
}

const Exercise = (props) => {
  const date = new Date(props.exercise.date).toLocaleString()

  return (
    <div className="ahihi">
      <div className="ahihi-item">
        <div>Username: {props.exercise.username}</div>
        <div>Description: {props.exercise.description}</div>
        <div>Duration: {props.exercise.duration}</div>
        <div>Date: {date}</div>
      </div>
  
      <button className="btn btn-primary btn-edit">
        <Link to={`/edit/${props.exercise._id}`}>Edit</Link>
      </button>
      <button className="btn btn-danger" onClick={() => props.deleteExercise(props.exercise._id)}>Delete</button>
    </div>
  )
}