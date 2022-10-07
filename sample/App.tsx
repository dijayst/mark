import React, { useEffect, useState } from 'react';
import {  Text, View, StyleSheet,Button,TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
//import {Getsum} from './Getsum';
import {Getsum} from "../sample/Getsum";
import {createStackNavigator} from  '@react-navigation/stack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from  '@react-navigation/bottom-tabs'
//import { createAppContainer, createNavigationContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import Home from './route/Home';
import Contact from "./route/Contact";



const AuthStack= createStackNavigator();
//const AuthStack= createBottomTabNavigator();
export default function App() {
  const [name1, setname1] = useState([
    {name: 'ebun ', key:'1'},
    {name: 'dushen', key:'2'},
    {name: 'sally', key:'3'},
    {name: 'dami', key:'4'},
    {name: 'ayo', key:5},
    {name: 'ebun ', key:'6'},
    {name: 'dushen', key:'7'},
    {name: 'sally', key:'8'},
    {name: 'dami', key:'9'}
  ]);
  const pressHandler=(key)=>{
    console.log(key)
    setname1((prevname)=>{
      return(
        prevname.filter((person)=>person.key!=key)
      )
    })
  }
  /* */
  useEffect(() => {
   console.log("why nah")
  },)
  return (
    <View style={styles.container}>
      <NavigationContainer>
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
      <AuthStack.Screen name="Homeu" component={Home} options={{title:"Home" }}
      />
      <AuthStack.Screen name="Contact" component={Contact}  options={{title:"Home"}}
    />
    </AuthStack.Navigator>
  </NavigationContainer>
  <Text>heloufryhh</Text>
  </View>
    );
}

const styles =StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
  paddingHorizontal:20
  },
  body:{
    backgroundColor:'pink',
    padding:40,
    marginTop:5,
    fontSize:20,

  },
  bold:{
    fontWeight:'bold',
    backgroundColor:'white',
    borderRadius:12,
    width:150,
    height:30

  }
})

/*
 <ScrollView>
{name.map((item)=>{
  return (
    <View key={item.key}>
<Text style={styles.body}>{item. name}</Text>
</View>
  )
})}
</ScrollView>
*/