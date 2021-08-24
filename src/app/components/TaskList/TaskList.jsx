import React, { useState, useEffect } from 'react'
import { TextField, List, Container } from '@material-ui/core'
import AppTitle from '../AppTitle/AppTitle'
import TaskItem from '../TaskItem/TaskItem'
import { useStyles } from './TasksList.styles'
import { createTaskDocument, firestore } from '../../firebase/firebase.utils'

export default function TaskList({ currentUser }) {
  const classes = useStyles()
  const currentUserId = currentUser ? currentUser.uid : null
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([])
  const taskRef = firestore.collection('task')

  useEffect(() => {
    taskRef.where('uid', '==', currentUserId).onSnapshot((snapShot) => {
      const taskList = []
      snapShot.forEach((doc) => {
        taskList.push(doc.data())
      })
      setTasks(taskList)
    })
  }, [])

  function showTaskList() {
    return tasks.map((task, index) => (
      <TaskItem key={index} data={task} changeStatus={changeStatus} />
    ))
  }

  function handleKeyPress(event) {
    event.preventDefault()
    console.log(`Pressed keyCode ${event.key}`)
    const taskToInsert = {
      id: tasks.length + 1,
      completed: false,
      text: event.target.value,
      uid: currentUser.uid,
    }

    createTaskDocument(taskToInsert)

    setTasks((prev) => [...prev, taskToInsert])
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
          autoComplete="off"
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
