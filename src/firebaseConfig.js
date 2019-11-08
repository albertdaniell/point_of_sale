import React, { Component } from 'react'
import * as firebase from 'firebase'

var Config = {
    apiKey: "AIzaSyB-8ygm6I7tf-qC5CjuJ6HU8i6RxZKZFd0",
    authDomain: "point-of-sale-b83e8.firebaseapp.com",
    databaseURL: "https://point-of-sale-b83e8.firebaseio.com",
    projectId: "point-of-sale-b83e8",
    storageBucket: "point-of-sale-b83e8.appspot.com",
    messagingSenderId: "892948221508",
    appId: "1:892948221508:web:18913694f75514faa4b611",
    measurementId: "G-L3P6D0DGBR"
  };
  // Initialize Firebase

const Firebase = firebase.initializeApp(Config);

export default Firebase
