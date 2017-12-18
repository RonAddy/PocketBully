 import React from 'react'
 import { StyleSheet, Text, View } from 'react-native'
 import RegisterForm from './components/RegisterForm'
 import Auth from './modules/Auth'

 export default class App extends React.Component {
   constuctor () {
     super()
     this.state = {
       username: '',
       password: '',
       email: '',
       fname: '',
       lname: '',
       tokenLoaded: false,
       token: ''
     }

     this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleSubmit () {
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
      console.log(`Token is ${resJson}`)
      Auth.authenticateToken(resJson.token)
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
      console.log(this.state.token)
    })
    .catch(error => {
      console.error(error)
    })
   }
   render () {
     return (
       <View style={styles.container}>
       <Text>Open up App.js to start workin!</Text>
       {if Auth.isUserAuthenticated() ? <RegisterForm handleSubmit={this.handleSubmit}/> : <UserProfile />}
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
