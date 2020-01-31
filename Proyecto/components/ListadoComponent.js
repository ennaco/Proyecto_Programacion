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

componentDidUpdate(){
  fetch("http://localhost:3000/elements")
    .then((response)=> response.json())
    .then((json) => {this.setState({usuarios: json})})
    .catch((error)=> Console.log(error))
}


 render(){
  return (
   <View style={{backgroundColor:"white"}}>
     <Text>Segona Pantalla</Text>

     <FlatList
        data={this.state.usuarios}
        renderItem={({ item }) => (
            <View style={{borderColor: "black", borderWidth:4, marginBottom:10, backgroundColor:"white",marginRight:15, marginLeft:15, flex:1}} >
            <View style={{flexDirection:"row"}}>
              <View style={{flex:1/2}}>
                <Text>{item.nom}</Text>
                <Text></Text>
                <Text>{item.descripcio}</Text>
              </View>
              <View style={{flex:1/2}}>
                <View style={{borderBottomColor:'black',borderBottomWidth:1}}>
              <Button title={"Eliminar"} color="green"  onPress={() =>{
                                                        alert("vaig a esborrar: "+item.nom);
                                                        fetch('http://localhost:3000/elements/' + item.id, {
                                                        method: 'DELETE',
                                                        })
                                                        .then(res => res.text()) 
                                                        .then(res => console.log(res))
                                                    }
                                                }
            /></View>
            <View>
            
            <Button title={"Modificar"} color="green"  onPress={()=>this.props.mover({i:item})}
            />
            </View>
              </View>
            </View>
            
            
            </View>
           
            
        )}
      />

     </View>
  );
};
}


