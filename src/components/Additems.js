import React, {Component} from 'react'
import * as Print from 'expo-print';
import uuid from "uuid";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';
import firebase from 'firebase'
import {Container} from 'native-base';
import Firebase from '../firebaseConfig'

export class Additems extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Itemname: '',
      Itemprice: null,
      id: uuid(),
      isLoading: false
    }
  }

  addItem = () => {

    if (this.state.Itemname === '' || this.state.Itemprice === '') {
      alert("Fill in all fields")
      return 0;
    }
    //alert(0)

    this.setState({isLoading: true})
    var ref = firebase
      .database()
      .ref('products');

    ref
      .push({product_name: this.state.Itemname, price: this.state.Itemprice, id: this.state.id})
      .then(() => {
        alert("Item has been added to the database")
        setTimeout(() => {
            this.setState({isLoading: false})
          this.setState({Itemname: '', Itemprice: '', id: ''})
        }, 2000);
      })
      .catch((e) => {
        this.setState({isLoading: false})
        alert(e)
      })
  }

  render() {
    return (
      <View style={{
        flex: 1,
        padding: 20
      }}>
        <View style={{
          flex: 1
        }}></View>
        <View style={{
          flex: 1
        }}>
          <Text
            style={{
            padding: 10,
            textAlign: 'center',
            fontSize: 20
          }}>Add item</Text>
          <TextInput
            onChangeText={(Itemname) => this.setState({Itemname})}
            defaultValue={this.state.Itemname}
            style={{
            borderColor: '#ccc',
            borderWidth: 1,
            marginBottom: '3%',
            padding: '3%'
          }}
            placeholder="Enter Item name"></TextInput>
          <TextInput
          keyboardType="number-pad"
            defaultValue={this.state.Itemprice}
            onChangeText={(Itemprice) => this.setState({Itemprice})}
            style={{
            borderColor: '#ccc',
            borderWidth: 1,
            marginBottom: '3%',
            padding: '3%'
          }}
            placeholder="Enter Item price"></TextInput>

          {this.state.isLoading
            ? <View style={{
                padding: 10
              }}>
                <ActivityIndicator size="large" color="#0000ff"/>

              </View>
            : <TouchableOpacity
              onPress={() => this.addItem()}
              style={{
              padding: 20,
              backgroundColor: 'hotpink',
              alignItems: 'center'
            }}>
              <Text
                style={{
                color: 'white',
                fontSize: 15,
                letterSpacing: 2
              }}>FINISH</Text>
            </TouchableOpacity>
}

        </View>

        <View style={{
          flex: 1
        }}></View>

      </View>
    )
  }
}

export default Additems
