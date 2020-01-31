import 'react-native-gesture-handler'
import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';


export default class RegistroComponent extends Component{
    constructor(props){
        super(props)


        this.state={
            id: "", 
            userName: "",
            contrasenya: "",
            nom: ""
        }
    }

    guardarUsuario=(usuario)=>{
        this.setState({userName: usuario})
    }

    guardarPassword=(password)=>{
        this.setState({contrasenya: password})
    }

    guardarName=(name)=>{
        this.setState({nom: name})
    }

    anyadirYcomprobarDatos = ()=>{
        let msg = "";
        let valor = 0;
        if(this.state.userName == ""){
            msg += "User\n";
            valor+=1;
        } 

        if(this.state.contrasenya == ""){
            msg += "Password\n";
            valor+=1;
        }

        if(this.state.nom == ""){
            msg += "Name\n";
            valor+=1;
        }

        if(valor > 0 ){
            Alert.alert("Te falta poner: ",msg);
        }
        else{
            fetch('http://localhost:3000/usuaris', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id: this.state.id, 
                userName: this.state.userName,
                contrasenya: this.state.contrasenya,
                nom: this.state.nom

              }),
            }); 

            
            this.pasarLoginPantalla();
            console.log("HOLA ME CAGO EN DIOS");
          }
    }

    pasarLoginPantalla(){
      console.log('voy a pasar a la pantalla de Login');
      this.props.navigation.navigate('LoginView');
    }


    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize:50, color:'green',fontWeight: 'bold',padding:10}}>REGISTRO</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                    placeholder="Usuario" 
                    onChangeText={this.guardarUsuario} 
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                    placeholder="Nombre" 
                    onChangeText={this.guardarName} />
                </View>
                <View style= {styles.inputContainer}>
                    <TextInput style={styles.inputs}
                    placeholder="Password" 
                    onChangeText={this.guardarPassword} />
                </View>
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
                onPress={this.comprobarDatos}>
                    <Text>REGISTER</Text>
                </TouchableOpacity>
            </View>

        )
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