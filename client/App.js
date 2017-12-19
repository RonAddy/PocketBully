 import React from 'react'
 import { StyleSheet, Text, View } from 'react-native'
 import RegisterForm from './components/RegisterForm'
 import Auth from './components/modules/Auth'
 import UserProfile from './components/UserProfile'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

 export default class App extends React.Component {
   constructor () {
     super()
     this.state = {
       auth: Auth.isUserAuthenticated(),
       username: '',
       password: '',
       email: '',
       fname: '',
       lname: ''
     }

     this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleSubmit () {
     console.log(this.state.user)
     fetch('https://morning-river-43514.herokuapp.com/users', {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         user: {
           username: this.state.username,
           password: this.state.password,
           email: this.state.email,
           fname: this.state.fname,
           lname: this.state.lname
         }
       })
     })
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      Auth.authenticateToken(resJson.token)
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
    })
    .catch(error => {
      console.error(error)
    })
   }

   changeState (state, value) {
     switch (state) {
       case 'username':
         this.setState({
           username: value
         })
         console.log(this.state.username)
         break
       case 'password':
         this.setState({
           password: value
         })
         console.log(this.state.password)
         break
       case 'email':
         this.setState({
           email: value
         })
         console.log(this.state.email)
         break
       case 'fname':
         this.setState({
           fname: value
         })
         console.log(this.state.fname)
         break
       case 'lname':
         this.setState({
           lname: value
         })
         console.log(this.state.lname)
         break
     }
   }

   render () {
     return (
       <View style={styles.container}>
         <Text>Open up App.js to start workin!</Text>
         {this.state.auth ? <UserProfile /> : <RegisterForm handleSubmit={this.handleSubmit} changeState={this.changeState.bind(this)} />}
       </View>
     )
   }
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center'
   }
 })
