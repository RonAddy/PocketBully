const sessionStorage = require('web-storage')().sessionStorage
import React from 'react'
import { AsyncStorage} from 'react-native'

class Auth extends React.Component {
  static authenticateToken (token) {
    sessionStorage.set('token', token)
  }

  static isUserAuthenticated () {
    return sessionStorage.get('token') !== undefined
  }

  static deauthenticateUser () {
    sessionStorage.remove('token')
  }

  static getToken () {
    return sessionStorage.get('token')
  }
}

export default Auth
