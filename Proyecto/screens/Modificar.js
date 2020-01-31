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

export default class Modificar extends Component{

      render(){
        let x = this.props.navigation.getParam('hr')
        return(
          <View>
            
            <ModificarAñadir text={"Modificar"} producto={x}/>
          </View>
    
        )
      }
    
    }

