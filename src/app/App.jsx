import React from 'react'
import { CssBaseline } from '@material-ui/core'
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <TaskList />
    </>
  )
}
