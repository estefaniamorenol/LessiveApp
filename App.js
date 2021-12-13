import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

export default class App extends React.Component{
  state = {
    isFontLoaded : true
  }
  async componentDidMount(){
    await Font.loadAsync({
      'MontBold' : require('./src/fonts/Montserrat-Bold.ttf'),
      'MontReg' : require('./src/fonts/Montserrat-Regular.ttf'),
      'MontM' : require('./src/fonts/Montserrat-MediumItalic.ttf'),
      'MontReg' : require('./src/fonts/Montserrat-Regular.ttf'),
    });
    this.setState({isFontLoaded:true})
  }
  render(){
    return(
      (this.state.isFontLoaded === true) ? (<AppNavigator/>):(<AppLoading/>)
    );
  }
}