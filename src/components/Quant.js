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

export class Quant extends Component {
  render() {

    const {cartItems, totalAm}=this.props
    return (
      <View
        style={{
        zIndex: 10,
        position: 'absolute',
        bottom: -5,
        marginRight: 10,
        width: '100%',
        padding: 5,
        backgroundColor:'white'
      }}>
        <View
          style={{
          backgroundColor: 'orange',
          padding: 20,
          borderRadius: 4,
          bottom: 10,
        }}>
          <Text style={{color:'white'}}>
              {cartItems} Items   |  Amount: Ksh. | {totalAm}
          </Text>
        </View>
      </View>
    )
  }
}

export default Quant
