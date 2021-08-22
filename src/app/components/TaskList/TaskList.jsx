import React, { useState } from 'react'
import { TextField, List, Container } from '@material-ui/core'
import AppTitle from '../AppTitle/AppTitle'
import TaskItem from '../TaskItem/TaskItem'
import { useStyles } from './TasksList.styles'

export default function TaskList() {
  const classes = useStyles()
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      completed: true,
      text: 'Task 1',
    },
    {
      id: 2,
      completed: false,
      text: 'Task 2',
    },
    {
      id: 3,
      completed: false,
      text: 'Task 3',
    },
  ])

  function showTaskList() {
    return tasks.map((task, index) => (
      <TaskItem key={index} data={task} changeStatus={changeStatus} />
    ))
  }

  function handleKeyPress(event) {
    event.preventDefault()
    console.log(`Pressed keyCode ${event.key}`)

    setTasks((prev) => [
      ...prev,
      { id: tasks.length + 1, completed: false, text: event.target.value },
    ])
    setInputValue('')
  }

  function changeStatus(taskId, newStatus) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: newStatus } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <>
      <Container maxWidth="md">
        <AppTitle />
        <TextField
          fullWidth
          id="outlined-basic"
          label="New task"
          variant="outlined"
          value={inputValue}
          onKeyPress={(event) =>
            event.key === 'Enter' ? handleKeyPress(event) : undefined
          }
          onChange={(event) => setInputValue(event.target.value)}
        />

        <List className={classes.list}>{showTaskList()}</List>
      </Container>
    </>
  )
}
