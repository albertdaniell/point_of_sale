import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/components/Login'
import HomeScreen from './src/components/Home'
import Splash from './src/components/Splash'
import Makesales from './src/components/Makesales'

const MainNavigator = createStackNavigator({
  Makesales: {
    screen: Makesales,
    navigationOptions:{
      title:'Make Sales'
    }
  },
  Splash:{
    screen:Splash,
    navigationOptions:{
      header:null
    }
  },
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      title:'Betty Beuty Palour'
    }
    
  },
  Login: {
    screen: LoginScreen,
    navigationOptions:{
      header:null,
    }
  },


 
});
const AppContainer = createAppContainer(MainNavigator);

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
