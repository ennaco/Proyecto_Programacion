import 'react-native-gesture-handler'
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import RegistroComponent from '../components/RegistroComponent';


export default class Registro extends Component{

  
  moveraLogin = () =>{
    this.props.navigation.navigate("LoginView")
  }
  render(){
    return (
      <View style={{flex:1}}>
        <RegistroComponent login={this.moveraLogin}/>
      </View>
    )
  }
}
