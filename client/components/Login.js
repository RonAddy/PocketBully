import React, {Component} from 'react'
import { View, TextInput, TouchableHighlight, Text, StyleSheet} from 'react-native'

export default class RegisterForm extends Component {
  render () {
    return (
      <View style={styles.LoginForm}>
        <View style={styles.FormContainer}>
          <TextInput onChangeText={val => this.props.changeState('username', val)} placeholder='Username' style={styles.FormInput} />
          <TextInput onChangeText={val => this.props.changeState('password', val)} placeholder='Password' secureTextEntry style={styles.FormInput} />
          <TouchableHighlight onPress={() => setTimeout(this.props.handleSubmit, 1500)}style={styles.RegisterButton}>
            <Text>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
 }

const styles = StyleSheet.create({
  LoginForm: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2.5
  },

  FormInput: {
    borderBottomWidth: 3.5,
    borderBottomColor: 'black',
    marginBottom: 12,
    fontSize: 25
  },
})
