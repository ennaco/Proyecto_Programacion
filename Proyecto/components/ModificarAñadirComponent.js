import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,

  
  
} from 'react-native';
import { exportDefaultSpecifier, tsImportEqualsDeclaration } from '@babel/types';

import 'react-native-gesture-handler';


export default class ModificarAñadir extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            nom:"",
            descripcio:"",
         
           
        }
    }
    componentDidMount(){
      if(this.props.producto != ""){
        this.setState({nom:this.props.producto.nom})
        this.setState({descripcio:this.props.producto.descripcio})
        this.setState({id:this.props.producto.id})
      }
    }
    funciona = () => {

        
      var alert = ""

      if(this.state.nom == ""){
  
        alert += "Pon el Nombre \n"
      }

      if(this.state.descripcio == ""){
 
        alert += "Pon la descripcion \n"
      } 


  
     if(alert != "" ){
        Alert.alert("Te falta poner: ",alert);
      }
      else{
        if(this.props.producto == ""){
          fetch('http://localhost:3000/elements', {
            method: 'POST',
            headers: {
              
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id:"",
              nom:this.state.nom,
              descripcio:this.state.descripcio,
            })
          })
          Alert.alert("Se ha añadido a: ", this.state.nom)
            this.setState({
             id:"",
             nom:"",
             descripcio:"",
            }); 
        }
        else{
          let x={
            id:this.state.id,
            nom:this.state.nom,
            descripcio:this.state.descripcio
          }
          fetch('http://localhost:3000/elements/'+ x.id, {
            method: 'PUT',
            body: JSON.stringify(x),
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }
          })
            .then((resposta) => {
              if (resposta.ok) {
                return resposta.json();
              } else {
                console.log("Error fent el PUT")
              }
            })
            .then(respostaJson => {
              console.log(respostaJson);
              Alert.alert("Dades actualitzades correctament {" + x.id + "," + x.nom + "," + x.descripcio+ "}");
            })
            .catch(error => {
              console.log("Error de xarxa: " + error);
            })
        }
        
        
        
        

      }
    }

    
  

    render(){
      return(
        <View style={styles.posicion}>
            <View>
              <Text>{this.props.text}</Text>
            </View>
            <View >
            <TextInput onChangeText={(text) => this.setState({nom: text})} placeholder={"Pon el nombre del Producto"} style={styles.title} keyboardType={"default"} value={this.state.nom}/>

            <TextInput onChangeText={(text) => this.setState({descripcio: text})} placeholder={"Pon la descripcion del Producto"} style={styles.title} keyboardType={"default"} value={this.state.descripcio}/>
            <Button color='green' title="Comprobar" onPress={this.funciona}/>
            </View>
              
              
        </View>
  
  
      )
    }
  
  }

  const styles = StyleSheet.create({
    container: {
      borderRadius: 3,
      borderWidth: 0.3,
      borderColor: '#d6d7da',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      borderColor:"black",
      borderWidth:2,

    },
    titledni:{
      fontSize: 20,
      fontWeight: 'bold',
      borderColor:"black",
      borderWidth:5
    },
    posicion:{
      alignItems: "center"
      
    },
    activeTitle: {
      color: 'red',
    },
    borde:{
      
    }
  });