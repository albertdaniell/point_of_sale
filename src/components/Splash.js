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
import {NavigationActions} from 'react-navigation';

// Your web app's Firebase configuration

export class Splash extends Component {

  checkLogin = () => {

    firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          //alert("user signed in")
          this
            .props
            .navigation
            .reset([NavigationActions.navigate({routeName: 'Home'})], 0);

        } else {
          this
            .props
            .navigation
            .reset([NavigationActions.navigate({routeName: 'Login'})], 0);

          //alert("user not signed in!")

        }
      });

  }

  componentDidMount() {
    this.checkLogin()
  }
  render() {

    return (
      <View
        style={{
        flex: 1,
        height: '100%',
        backgroundColor: '#ff0dcc'
      }}>
        {/* <Image source={require('../../assets/yemi.jpg')} style={{height:'50%'}}></Image> */}
      </View>
    )
  }
}

export default Splash
