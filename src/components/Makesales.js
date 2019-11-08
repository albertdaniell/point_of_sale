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
import Products from './Products'
import Quant from './Quant'
import Preview from './Preview'
import PreviewView from './Previewview'


export class Makesales extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         showQuant:false,
         showPreview:false,
         cart:[],
         date:'',
         tax:16,
         cartItems:0
      };

      showPreviewFn=this.showPreviewFn.bind(this)
      addToCart=this.addToCart.bind(this)
    };

    calcItems=()=>{
    setTimeout(() => {
        this.setState({
            cartItems:this.state.cart.length
        })
    }, 200);
    }


    addToCart=(id,pname,amount)=>{
setTimeout(() => {

    this.calcItems()
    
    let cartItem={
        id:id,
        pname:pname,
        amount:amount,
        date:this.state.date
    }

    this.setState({
        cart:[...this.state.cart,cartItem]
    })

    console.log("cart.......",this.state.cart)

}, 300);
    }

    

    showPreviewFn=()=>{
       
        this.setState({
            showPreview:!this.state.showPreview
        })
    }
    
  render() {
    return (
      <View>
     
          <Products addToCart={this.addToCart}></Products>
          <Preview showPreviewFn={this.showPreviewFn}></Preview>
          <Quant cartItems={this.state.cartItems}></Quant>

          {
              this.state.showPreview?
              <PreviewView cart={this.state.cart} showPreviewFn={this.showPreviewFn}></PreviewView>

              :null
          }
      </View>
    )
  }
}

export default Makesales
