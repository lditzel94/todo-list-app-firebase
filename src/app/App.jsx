import React from 'react'
import { CssBaseline } from '@material-ui/core'
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'
import { Route, Switch } from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'

/**
 * Create react context to provide logged in user data
 * Fix Signin firebase setup in SignIn.jsx
 * Set Signup firebase methods
 * Store user in FireStore
 * Set collection and documents via firestore to save tasks data
 */

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={TaskList} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </>
  )
}
