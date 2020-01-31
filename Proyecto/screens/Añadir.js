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

      render(){
        return(
          <View>
            <ModificarAñadir text={"Añadir"} producto={""}/>
          </View>
    
        )
      }
    
    }

