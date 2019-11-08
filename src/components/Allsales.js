import React, {Component} from 'react'
import * as Print from 'expo-print';
import uuid from "uuid";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
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
      allsales: [],
      isLoading: true
    }
  }

  pullAllSales = () => {
    var ref = firebase
      .database()
      .ref('mysales');

    ref.on("value", (snapshot) => {
      var childData = Object.values(snapshot.val());
      //console.log(childData) Object.values()

      snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        console.log(childSnapshot.val())

        this.setState({allsales: childData,isLoading:false})
        // ... console.log(childData)

      });

      // console.log(data.val().product_name)

    })
  }

  componentDidMount() {
    this.pullAllSales()
  }

  render() {
    return (
      <View>

        {this.state.isLoading
          ? <ActivityIndicator size="large" color="#0000ff"/>

          : <ScrollView>
            {this
              .state
              .allsales
              .map((as) => {
                return (
                  <TouchableOpacity
                    style={{
                    padding: 10,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                  }}>
                    <Text
                      style={{
                      fontSize: 20,
                      fontWeight: 'bold'
                    }}>{as.total}</Text>
                    <Text
                      style={{
                      color: '#ccc',
                      fontSize: 12
                    }}>Receipt number: {as.uuid}</Text>
                  </TouchableOpacity>
                )
              })
}
          </ScrollView>
}

      </View>
    )
  }
}

export default Allsales
