import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import 'react-native-gesture-handler';
import LoginViewComponent from '../components/LoginViewComponent';

export default class LoginView extends Component {

  moveraInici=({n})=>{

    this.props.navigation.navigate("Inici",{nusu:n})
  }

  moveraRegistro = () =>{
    this.props.navigation.navigate("Registro")
  }

  render() {
    
    return (
      <View style={{flex:1}}>
      <LoginViewComponent inici={this.moveraInici} registro={this.moveraRegistro} />
      </View>
    );
  }
}
