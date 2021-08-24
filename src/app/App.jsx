import React from 'react'
import { CssBaseline } from '@material-ui/core'
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'
import { Redirect, Route, Switch } from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import {
  auth,
  createUserProfileDocument,
  firestore,
} from './firebase/firebase.utils'

/**
 * Create react context to provide logged in user data
 * Fix Signin firebase setup in SignIn.jsx
 * Set Signup firebase methods
 * Store user in FireStore
 * Set collection and documents via firestore to save tasks data
 */

export default class App extends React.Component {
  unsubscribeFromAuth = null
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      /* if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      } */

      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    console.log(this.state)

    return (
      <>
        <CssBaseline />
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/">
            {this.state.currentUser ? (
              <TaskList currentUser={this.state.currentUser} />
            ) : (
              <div style={{ textAlign: 'center' }}>
                <h1>Sign in to start</h1>
              </div>
            )}
          </Route>
          <Route path="/signin">
            {this.state.currentUser ? <Redirect to="/" /> : <SignIn />}
          </Route>
          <Route path="/signup">
            {this.state.currentUser ? <Redirect to="/" /> : <SignUp />}
          </Route>
        </Switch>
      </>
    )
  }
}
