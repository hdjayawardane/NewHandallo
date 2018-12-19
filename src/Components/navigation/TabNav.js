/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import AuthLoadingScreen from './src/Components/screens/AuthLoadingScreen/AuthLoadingScreen'
import Login from './src/Components/screens/Login/Login'
import Signup from './src/Components/screens/Signup/Signup';
import Home from './src/Components/screens/Home/Home';
import Search from './src/Components/screens/Search/Search';
import Orders from './src/Components/screens/Orders/Orders';
import Profile from './src/Components/screens/Profile/Profile';
import Cart from './src/Components/screens/Cart/Cart'
import FoodItem from './src/Components/foodItem/FoodItem';
//import Location from './src/Components/screens/Location /Location'


const AppTabNavigator = createBottomTabNavigator({
  // tabBarOptions: {
  //   activeTintColor: '#d32f2f',
  //   // inactiveTintColor:''
  // },
  Home : {
    screen: Home,
    navigationOptions:{
      tabBarLable:'Home',
      tabBarIcon:({tintColor}) =>(
        <Icon name="ios-home" size={24} />
      )
     }
  },
  Search: {
    screen: Search,
    navigationOptions:{
      tabBarLable:'Search',
      tabBarIcon:({tintColor}) =>(
        <Icon name="ios-search" size={24} />
       
      )
    }         
  },
  Orders: {
    screen: Orders,
    navigationOptions:{
      tabBarLable:'Orders',
      tabBarIcon:({tintColor}) =>(
        <Icon name="ios-clipboard" size={24} />
       
      )
    }  
  },


  Profile: {
    screen: Profile, 
    navigationOptions:{
      tabBarLable:'Profile',
      tabBarIcon:({tintColor}) =>(
        <Icon name="ios-person" size={24} />
       
      )
    }  
  },
  Cart: {
    screen: Cart, 
    navigationOptions:{
      tabBarLable:'Cart',
      tabBarIcon:({tintColor}) =>(
        <Icon name="ios-cart" size={24} />
       
      )
    }  
  }
 
 
  
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator
  }
})

const AppDrawNavigator = createDrawerNavigator({
  Home: AppStackNavigator
})


export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawNavigator
})

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}> to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

//export { default as AppContainer } from  './App/AppContainer'