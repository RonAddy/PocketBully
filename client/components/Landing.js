import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
 import { Button } from 'react-native-elements'


 export default class App extends React.Component {

   render () {
     return (
      <View>
         <Image source={require('../public/PocketBully_logo.png')} />
         <Text >PocketBully</Text>

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
