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


export class Preview extends Component {
  render() {
      const {cart}=this.props
    return (

      <View
        style={{
        zIndex: 1,
        position: 'absolute',
        bottom: 80,
        right: 0,
        
        width: '30%',
        padding: 5
      }}>
        <TouchableOpacity
        onPress={()=>this.props.showPreviewFn()}
          style={{
          backgroundColor: 'rgb(8, 127, 255)',
          padding: 20,
          borderRadius: 4,
          alignItems:'center'
        }}>
          <Text>Preview</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Preview
