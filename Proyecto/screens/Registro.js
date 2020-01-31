import 'react-native-gesture-handler'
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import RegistroComponent from '../components/RegistroComponent';


export default class Registro extends Component{

  render(){
    return (
      <View>
        <RegistroComponent />
      </View>
    )
  }
}
