/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
  pre,
  StatusBar,
} from 'react-native';




export default class ListadoProductos extends Component {
constructor(props){
  super(props)
  this.state={usuarios:undefined}
}


  //Obtener productos
componentDidMount(){
    fetch("http://localhost:3000/elements")
    .then((response)=> response.json())
    .then((json) => {this.setState({usuarios: json})})
    .catch((error)=> Console.log(error))
  }


 render(){
  return (
   <View style={{backgroundColor:"yellow"}}>
     <Text>Segona Pantalla</Text>

     <FlatList
        data={this.state.usuarios}
        renderItem={({ item }) => (
            <View style={{borderColor: "blue", borderWidth:4, marginBottom:10, backgroundColor:"pink",marginRight:15, marginLeft:15, flex:1}} >
            <View style={{flexDirection:"column"}}>
                <Text>{item.nom}</Text>
            </View>
            <Text>{item.descripcio}</Text>
            <Button title={"Eliminar"} onPress={() =>{console.log("vaig a esborrar: "+item.id);
                                                        fetch('http://localhost:3000/elements/' + item.id, {
                                                        method: 'DELETE',
                                                        })
                                                        .then(res => res.text()) 
                                                        .then(res => console.log(res))
                                                    }
                                                }
            />
            </View>
           
            
        )}
      />

     </View>
  );
};
}


