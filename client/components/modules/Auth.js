import React from 'react'

const sessionStorage = require('web-storage')().sessionStorage

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
