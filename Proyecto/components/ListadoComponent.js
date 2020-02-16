/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import React, { Component } from 'react';
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
  constructor(props) {
    super(props)
    //nos creamos un objeto productos que ahora estará vacío
    this.state = { productos: undefined }
  }


  //Obtener productos
  componentDidMount() {
    fetch("http://localhost:3000/elements")
      .then((response) => response.json())
      .then((json) => { this.setState({ productos: json }) })
      .catch((error) => Console.log(error))
  }

  //para que cada vez que modifiquemos o eliminemos un producto se actualice automaticamente
  componentDidUpdate() {
    fetch("http://localhost:3000/elements")
      .then((response) => response.json())
      .then((json) => { this.setState({ productos: json }) })
      .catch((error) => Console.log(error))
  }
<<<<<<< HEAD

  
eliminar=(id,nom)=>{
  alert("vaig a esborrar: " + nom);
  fetch('http://localhost:3000/elements/' + id, {
    method: 'DELETE',
  })
    .then(res => res.text())
    .then(res => console.log(res))

}
=======
>>>>>>> 014055b136a979dd21898625675d038ce89848f5

  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <FlatList
          data={this.state.productos}
          renderItem={({ item }) => (
            <View style={{ borderColor: "black", borderWidth: 4, marginBottom: 10, backgroundColor: "white", marginRight: 15, marginLeft: 15, flex: 1 }} >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 / 2 }}>
                  <Text>{item.nom}</Text>
                  <Text></Text>
                  <Text>{item.descripcio}</Text>
                </View>
                <View style={{ flex: 1 / 2 }}>
                  <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
                    <Button title={"Eliminar"} color="green" onPress={() => {this.eliminar(item.id,item.nom)}} />
                    </View>
                  <View>

<<<<<<< HEAD
=======
  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <FlatList
          data={this.state.productos}
          renderItem={({ item }) => (
            <View style={{ borderColor: "black", borderWidth: 4, marginBottom: 10, backgroundColor: "white", marginRight: 15, marginLeft: 15, flex: 1 }} >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 / 2 }}>
                  <Text>{item.nom}</Text>
                  <Text></Text>
                  <Text>{item.descripcio}</Text>
                </View>
                <View style={{ flex: 1 / 2 }}>
                  <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
                    <Button title={"Eliminar"} color="green" onPress={() => {
                      alert("vaig a esborrar: " + item.nom);
                      fetch('http://localhost:3000/elements/' + item.id, {
                        method: 'DELETE',
                      })
                        .then(res => res.text())
                        .then(res => console.log(res))
                    }
                    }
                    /></View>
                  <View>

>>>>>>> 014055b136a979dd21898625675d038ce89848f5
                    <Button title={"Modificar"} color="green" onPress={() => this.props.mover({ i: item })}
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

//en el Boton de Modificar haremos uso del prop que le hemos pasado por la pantalla de Inici y la variable i obtendrá todo el item concreto del flatList 

