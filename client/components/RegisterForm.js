import React, {Component} from 'react'
import { View, TextInput, TouchableHighlight, Text, StyleSheet} from 'react-native'

export default class RegisterForm extends Component {
  render () {
    return (
      <View style={styles.RegisterForm}>
        <View style={styles.FormContainer}>
          <TextInput onChangeText={val => this.setState({ username: val})} placeholder='Username' style={styles.FormInput} />
          <TextInput onChangeText={val => this.setState({ password: val})} placeholder='Password' secureTextEntry />
          <TextInput onChangeText={val => this.setState({ email: val})} placeholder='Email' />
          <TextInput onChangeText={val => this.setState({ fname: val})} placeholder='FirstName' />
          <TextInput onChangeText={val => this.setState({ lname: val})} placeholder='LastName' />
          <TouchableHighlight onPress={this.props.handleSubmit}style={styles.RegisterButton}>
            <Text>Register</Text>
          </TouchableHighlight>
        </View>
      </View>

    )
  }
 }

const styles = StyleSheet.create({
  RegisterForm: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2.5
  },

  FormInput: {
    borderBottomWidth: 3.5,
    borderBottomColor: 'blue'
  },

  FormContainer: {
    margin: 25
  },

  RegisterButton: {
    borderStyle: 'dotted',
    borderColor: 'green',
    borderWidth: 1.5
  }
})
