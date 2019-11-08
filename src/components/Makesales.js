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
         cartItems:0,
         totalAm:0
      };

      showPreviewFn=this.showPreviewFn.bind(this)
      addToCart=this.addToCart.bind(this)
    };
    myFn=()=>{

        setTimeout(() => {
            console.log(this.state.totalAm)
        }, 1000);
    //   setTimeout(() => {
    //     this.state.cart.map((c)=>{
    //         var totalam=0;
    //         for (i=1;i<this.state.cartItems;i++){
    //             totalam =totalam + c.amount
    //             //console.log("the amount is ",totalam)
    //             this.setState({
    //                 totalAm:totalam
    //             })
    //                  }
    //     })
    //   }, 1000);
    }

    calcItems=()=>{
    setTimeout(() => {
        this.setState({
            cartItems:this.state.cart.length
        })

   
    }, 200);

   

    console.log(this.state.cart)
// var totalam=0

//     for (i=0;i<this.state.cartItems.length;i++){
// totalam
//     }
    }


    addToCart=(id,pname,amount)=>{
setTimeout(() => {

    this.calcItems()
    this.myFn()
var totalamount=parseInt(amount+this.state.totalAm)
    this.setState({
        totalAm:totalamount
    })
    
    let cartItem={
        id:id,
        pname:pname,
        amount:amount,
        date:this.state.date
    }

    this.setState({
        cart:[...this.state.cart,cartItem]
    })

   // console.log("cart.......",this.state.cart)

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
          <Quant cartItems={this.state.cartItems} totalAm={this.state.totalAm}></Quant>

          {
              this.state.showPreview?
              <PreviewView totalAm={this.state.totalAm} cart={this.state.cart} showPreviewFn={this.showPreviewFn}></PreviewView>

              :null
          }

      </View>
    )
  }
}

export default Makesales
