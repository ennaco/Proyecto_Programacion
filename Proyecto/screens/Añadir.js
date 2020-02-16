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
import ModificarAñadir from '../components/ModificarAñadirComponent'

export default class Añadir extends Component{

  //creamos una función que nos permita la navegación a la pantalla de Inici
  moveraInici = () =>{
    this.props.navigation.navigate("Inici")
  }

  //le pasamos el prop con la función de moverInici y un prop de producto que está vacío. 
      render(){
        return(
          //padre a hijo es de props, el texto añadir es de padre a hijo y luego this.moveraInici es de hijo a padre
          //cuando el hijo lo llama y el padre lo ejecuta por que si lo ejecuta directamente el hijo no funciona
          // y cuando el hijo lo pasa el padre 
          <View>
            
            <ModificarAñadir text={"Añadir"} producto={""} inici={this.moveraInici}/>
          </View>
    
        )
      }
    
    }

