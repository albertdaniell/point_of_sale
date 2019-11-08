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
  Image,ScrollView
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
      showQuant: false,
      showPreview: false,
      cart: [],
      date: '',
      tax: 16,
      cartItems: 0,
      totalAm: 0,
      receiptid:uuid(),
      showPreviewBtn:false
    };

    showPreviewFn = this
      .showPreviewFn
      .bind(this)
    addToCart = this
      .addToCart
      .bind(this)

    myPrint = this
      .myPrint
      .bind(this)
  };
  myFn = () => {

    setTimeout(() => {
      console.log(this.state.totalAm)
    }, 1000);
    //   setTimeout(() => {     this.state.cart.map((c)=>{         var totalam=0;
    //   for (i=1;i<this.state.cartItems;i++){             totalam =totalam +
    // c.amount             //console.log("the amount is ",totalam) this.setState({
    //                totalAm:totalam             })   }     })   }, 1000);
  }

  myPrint = () => {

    setTimeout(() => {
        this.showPreviewFn()
    }, 1000);

    var ref = firebase
    .database()
    .ref('mysales');

    ref.push({
        cart:this.state.cart,
        total:this.state.totalAm,
        uuid:uuid()
       

    }).then(()=>{
        console.log("Data has been saved to db")
    })

    console.log("......*****");
    
    var d = new Date();
    let year=d.getFullYear();
    let date=d.getDate()
    let month=d.getMonth()
    let myYear= date + "-"+ month + " "+ year
    let num1 = 2000;
    let total=this.state.totalAm
    let receiptid=this.state.receiptid
    var cartItems2=this.state.cartItems;
    let cartItems=this.state.cart.map((c)=>{
        return c.pname +"-" + c.amount + "</br>"
           
    })
    let html = `<div>
      <center>
      <p>${receiptid}</p>
      <h2>Betty Beuty Parlor</h2>
      <h3>0791836987</h3>
      <h4>PO BOX 1889-11,Nairobi </h4>
      <h4>Time of Receipt Print ${myYear}</h4>
      <h4>Served by test@test.com</h4>
      <p>........................</p>
      <h4>Items Sold</h4>
      <p>${cartItems}</p>
      <p>........................</p>
      <h4>Total Items sold ${cartItems2}</h4>
      <h4>Tax: Null</h4>
      <h1>Grand Total:<strong> ${total}</strong></h1>
      <p>Receipt ID:- ${receiptid}</p>
      <h4>THANK YOU FOR TRUSTING US!</h4>
      </center>

      
   
        
        </div>`;
    var options = {
      width: 500,
      height: 800,
      html: html
    }
    Print.printAsync(options)
  }

  calcItems = () => {
    setTimeout(() => {
      this.setState({cartItems: this.state.cart.length})

    }, 200);

    console.log(this.state.cart)
    // var totalam=0     for (i=0;i<this.state.cartItems.length;i++){ totalam     }
  }

  addToCart = (id, pname, amount) => {
    setTimeout(() => {
this.setState({
    showPreviewBtn:true
})
      this.calcItems()
      this.myFn()
      var totalamount = parseInt(amount + this.state.totalAm)
      this.setState({totalAm: totalamount})

      let cartItem = {
        id: id,
        pname: pname,
        amount: amount,
        date: this.state.date
      }

      this.setState({
        cart: [
          ...this.state.cart,
          cartItem
        ]
      })

      // console.log("cart.......",this.state.cart)

    }, 300);
  }

  showPreviewFn = () => {

    this.setState({
      showPreview: !this.state.showPreview
    })
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
          <ScrollView style={{marginBottom:100}}>
          <Products addToCart={this.addToCart}></Products>

          </ScrollView>

          {
              this.state.showPreviewBtn?
              <Preview showPreviewFn={this.showPreviewFn}></Preview>

              :null
          }

        <Quant cartItems={this.state.cartItems} totalAm={this.state.totalAm}></Quant>

        {this.state.showPreview
          ? <PreviewView
              myPrint={this.myPrint}
              totalAm={this.state.totalAm}
              cart={this.state.cart}
              showPreviewFn={this.showPreviewFn}></PreviewView>

          : null
}

      </View>
    )
  }
}

export default Makesales
