import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import firebase from 'firebase'
import {Container} from 'native-base';
import Firebase from '../firebaseConfig'

// Your web app's Firebase configuration

export class Home extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        <TouchableOpacity
          style={{
          width: '100%',
          padding: 20,
          flex: 1,
          backgroundColor: 'rgb(245, 66, 102)'
        }}>
          <Text style={{color:'white',fontSize:20}}>Total Sales</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Makesales')}
          style={{
          width: '100%',
          padding: 20,
          flex: 1,
          backgroundColor: 'rgb(245, 150, 66)'
        }}>
          <Text style={{color:'white',fontSize:20}}>Make Sales</Text>
        </TouchableOpacity>

        <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Additem')}

          style={{
          width: '100%',
          padding: 20,
          flex: 1,
          backgroundColor: 'rgb(66, 75, 245)'
        }}>
          <Text style={{color:'white',fontSize:20}}>Add Items</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
          width: '100%',
          padding: 20,
          flex: 1,
          backgroundColor: 'rgb(215, 66, 245)'
        }}>
          <Text style={{color:'white',fontSize:20}}>My Account</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Home
