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

export class Previewview extends Component {
  render() {
    const {cart}=this.props
    return (
      <View
        style={{
        zIndex: 1000,
        backgroundColor: 'rgba(0,0,0,.5)',
        height: '100%',
        width: '100%',
        padding: 20,
        position: 'absolute'
      }}>
        <View
          style={{
          backgroundColor: 'white',
          marginTop: '0%',
          padding: 10
        }}>
          <Text
            style={{
            fontStyle: 'italic',
            fontWeight: 'bold'
          }}>Preview of Items selected</Text>
        
          {
              cart.map((c)=>{
             return(
                <Text style={{paddingTop:10}}>{c.pname} - (KSH. {c.amount})</Text>
             )
              })
          }
          <TouchableOpacity style={{
            backgroundColor: 'rgb(8, 41, 255)',
            padding:10,
            alignItems:'center',
            marginTop:20,
            borderRadius:4
          }}>
            <Text style={{color:'white',textTransform:'uppercase'}}>Print</Text>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=>this.props.showPreviewFn()}
          style={{
            
            padding:10,
            alignItems:'center',
            marginTop:20,
            borderWidth:1,
            borderColor:'rgba(255, 8, 74,.3)',
            borderRadius:4

          }}>
            <Text style={{color:'rgb(255, 8, 74)',textTransform:'uppercase'}}>CLose</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

export default Previewview
