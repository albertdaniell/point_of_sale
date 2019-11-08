import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import firebase from 'firebase'
import {Container} from 'native-base';
import Firebase from '../firebaseConfig'

// Your web app's Firebase configuration

export class Products extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: []
    };
  };

  readData = () => {
    var prodRef = firebase
      .database()
      .ref('products')
    prodRef.on("value", (snapshot) => {
      var childData = Object.values(snapshot.val());
      //console.log(childData)
      // Object.values()

      snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        console.log(childSnapshot.val())
        // ...
        this.setState({products: childData})
        // console.log(childData)

      });

      // console.log(data.val().product_name)

    })
  }

  componentDidMount() {
    this.readData()
  }

  render() {
    return (

      <View>

        {this
          .state
          .products
          .map((p) => {
            return (
              <TouchableOpacity onPress={()=>this.props.addToCart(p.id,p.product_name,p.price)} style={styles.myTouch} key={p.id}>
                <Text style={styles.myText}>{p.product_name}</Text>
                <Text style={{fontStyle:'italic',}}>Ksh. {p.price} /-</Text>
              </TouchableOpacity>

            )

          })
}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  myText: {
    // padding: 10, borderBottomColor: '#efefef', borderBottomWidth: 1
    fontSize: 20,
    fontWeight: 'bold'
  },
  myTouch: {
    backgroundColor: 'rgba(217, 39, 208,.1)',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});

export default Products
