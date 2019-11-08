import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase'
import {Container} from 'native-base';
import Firebase from '../firebaseConfig'
// Your web app's Firebase configuration


export class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Email: '',
      Password: '',
      isLoggedIn: '',
      products: []
    };
  };

  PushProducts = () => {
    console.log("Push")
    var ref = firebase
      .database()
      .ref('products');
    // var prodRef = ref.child("products");
    ref.push({product_name: "Pedicure", price: 300})
    ref.push({product_name: "Manicure", price: 100})
    ref.push({product_name: "Braids", price: 200})

    ref.push({product_name: "Weaving", price: 150})

    ref.push({product_name: "Blow Dry", price: 50})

    ref.push({product_name: "Piercing", price: 100})

    ref.push({product_name: "Abuja Line", price: 300})

    ref.push({product_name: "Shave", price: 250})

  }

  readData = () => {
    var prodRef = firebase
      .database()
      .ref('products')
    prodRef.on("value", (snapshot) => {
      var childData = Object.values(snapshot.val());

      snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        // ...
        this.setState({products: childData})
        console.log(childData)

      });

      // console.log(data.val().product_name)

    })
  }

  LoginFn = () => {
    var email = 'haha@gmail.com';
    password = 'aaaa';
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.Email, this.state.Password)
      .then((res) => {
        //console.log(res)
        console.log("Login Successful")
        navigation.reset([NavigationActions.navigate({ routeName: 'Home' })], 0);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
      });
  }
  componentDidMount() {
    //this.LoginFn() this.PushProducts()
    this.readData()
  }

  render() {
    return (
      <View style={{
        padding: 20,
        marginTop: '20%'
      }}>
        <Text
          style={{
          textAlign: 'center',
          marginBottom: '2%',
          fontSize: 20,
          fontWeight: 'bold'
        }}>Login Screen
        </Text>
        <TextInput
        placeholder="Email address"
          onChangeText={(Email) => this.setState({Email})}
          style={{
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: '3%',
          padding: '3%'
        }}></TextInput>

        <TextInput
        secureTextEntry={true}
        placeholder="Password"
          onChangeText={(Password) => this.setState({Password})}
          style={{
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: '3%',
          padding: '3%'
        }}></TextInput>

        <TouchableOpacity
          onPress={() => this.LoginFn()}
          style={{
          padding: '5%',
          alignItems: 'center',
          backgroundColor: 'rgb(58, 52, 235)',
          borderRadius: 4
        }}>
          <Text
            style={{
            letterSpacing: 2,
            fontSize: 20,
            textTransform: 'uppercase',
            color: 'white'
          }}>Submit</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export default Login
