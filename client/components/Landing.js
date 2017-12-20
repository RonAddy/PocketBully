import React from 'react'
import { StyleSheet, View, Image} from 'react-native'
import { Button, Text } from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'

export default class App extends React.Component {

  render () {
    var navigate = this.props.navigation
    return (
      <View style={styles.container}>
        <Image source={require('../public/PocketBully_logo.png')} style={styles.logo} />
        <Text>PocketBully</Text>
        <View>
        {console.log(this.props.navigation)}
          <Button iconLeft light block style={styles.button}>
            <Icon name='users' />
            <Text onPress={() => navigate("Login", {})}>Login</Text>
          </Button>
          <Button iconLeft success block style={styles.button2}>
            <Icon name='add-user' />
            <Text >Register</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    marginTop: 100
  },

  button: {
    marginTop: 20
  },

  button2: {
    marginTop: 50,
    borderStyle: 'solid',
    width: 150
  }
})
