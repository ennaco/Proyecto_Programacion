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
export default class LoginViewComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      contrasenya: '',
      documentJSON: [],///Aquí se guardan los usuarios recuperados de la bbdd
      usuarioCorrecto: false,
    }
    //Esto es necesario para poder usar las funciones.
   this.comprobarUsuario = this.comprobarUsuario.bind(this);
   this.usuarioCorrecto = this.usuarioCorrecto.bind(this);
   this.cambioAInicio =  this.cambioAInicio.bind(this);
  } 


  //Recupera SOLO los usuarios que coincidan con las variables pasadas por parámetros   
  comprobarUsuario() {
    fetch(`http://localhost:3000/usuaris?userName=${this.state.email}&contrasenya=${this.state.contrasenya}`) 
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          console.log("Error en la conexion con http://localhost:3000/usuaris/")
          alert("Error en la conexion con http://localhost:3000/usuaris/")
        }
      })
      .then(respostaJson => {
        this.setState({ documentJSON: respostaJson })
      })
      .catch(error => {
        console.log("Error de conexion: " + error);
        
      });

      this.usuarioCorrecto();
      this.cambioAInicio();
      
  }

//Cambia el estado de la variable si el array de usuarios contiene datos.
  usuarioCorrecto(){
      if(this.state.documentJSON == []){
          this.setState({usuarioCorrecto: false});
          alert("El JSON está vacio");
      }else{
          this.setState({usuarioCorrecto:  true});
          alert("El JSON está lleno");
      }      
  }

  //Método para que devuelva a la página de REGISTRO
  cambioARegistro(){
      //hay que hacerlo
  }

  cambioAInicio(){
      //Si la variable usuarioCorrecto es TRUE, cambiamos a la pantalla de INICIO
      if(this.usuarioCorrecto == true){
          //Cambia a pantalla INICIO
          alert("Has cambiado a la pantalla de Inicio");
      }else{
          alert("Usuario incorrecto");
      }
  }

  guardarEmail=(email)=>{
    this.setState({email:email})
  }
  guardarContrasenya=(contrasenya)=>{
    this.setState({contrasenya:contrasenya})
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
          onChangeText={this.guardarContrasenya} />
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