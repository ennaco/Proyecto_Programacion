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
export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      contrasenya: '',
    }
  }
  guardarEmail = (email) => {
    this.setState({ email: email })
  }
  guardarContra = (contrasenya) => {
    this.setState({ contrasenya: contrasenya })
  }
  

  comprobarDatos = () => {
    let msg = "";
    let valor = 0;
    if (this.state.email === '') {
      msg += "Email\n";
      valor += 1;
    } else if (this.state.contrasenya === '') {
      msg += "Contraseña\n";
      valor += 1;
    }

    if (valor > 0) {
      Alert.alert("Te falta poner: ", msg);
    }
    else {
      fetch("http://localhost:3000/usuario")
      .then((response) => response.json())
      .then((json) => { this.setState({ usuarios: json }) })
      .catch((error) => Console.log(error))
    }
  }

render() {
  return (

    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 50, color: 'green', fontWeight: 'bold', padding: 10 }}>BIENVENIDOS</Text>
      </View>

      <View style={styles.inputContainer}>

        <TextInput style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid='transparent'
          onChangeText={this.guardarEmail} />
      </View>

      <View style={styles.inputContainer}>

        <TextInput style={styles.inputs}
          placeholder="Contraseña"
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          onChangeText={this.guardarContra} />
      </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.comprobarDatos}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer} onPress={()=>"hola"}>
        <Text>¿Has olvidado la contraseña?</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer} onPress={()=>"hola"}>
        <Text>Registrarse</Text>
      </TouchableHighlight>
    </View>

  );
}
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "green",
  },
  loginText: {
    color: 'white',
  },
  titulo: {
    backgroundColor: "#00b5ec",
    fontSize: 20,
    fontWeight: 'bold',
    width: 375,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 40
  }
});