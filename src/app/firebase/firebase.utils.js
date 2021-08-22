import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBEYfjYuvBU_IzZX1lxZMP086bwvjhe_-Y',
  authDomain: 'todo-list-app-firebase-8f8ac.firebaseapp.com',
  projectId: 'todo-list-app-firebase-8f8ac',
  storageBucket: 'todo-list-app-firebase-8f8ac.appspot.com',
  messagingSenderId: '502708005769',
  appId: '1:502708005769:web:f7540e176d961f134a0f58',
}
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const sigInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
