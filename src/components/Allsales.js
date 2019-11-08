import React, { Component } from 'react'
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

export class Allsales extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             allsales:[]
        }
    }

    getAllSales=()=>{
        
    }
    
    render() {
        return (
       <View>
          <Text></Text> 
       </View>
        )
    }
}

export default Allsales
