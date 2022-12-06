import React, { useEffect, useState } from 'react';
import {  Text, View, StyleSheet,Button,TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
//import {Getsum} from './Getsum';
import { Getsum } from './Getsum';
//import Getsum from "../sample/Getsum";
import {createStackNavigator} from  '@react-navigation/stack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from  '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
//import { createAppContainer, createNavigationContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import {Home} from './route/Home';
import Contact from "./route/Contact";
import  SearchBar from './route/SearchBar';
import {Router,Route, RouterProvider, Routes} from "react-router-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HeaderTitle } from 'react-navigation-stack';


//const AuthStack=createBottomTabNavigator();
//const AuthStack= createMaterialTopTabNavigator();
//const AuthStack= createStackNavigator();
const AuthStack= createBottomTabNavigator();
export default function Header() {
  return (
    <View style={styles.container}>
       <TextInput placeholder="search for shoes" style={{}}/>
     <Icon name={"star"} color="green" size={35}/>
       </View>
    );
}

const styles =StyleSheet.create({
  container:{
    backgroundColor:"blue",
    flex:1,
    color:"grey",
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


          <AuthStacck.Navigator>
      <AuthStacck.Screen  name="maincategory" component={Home}/>
          </AuthStacck.Navigator>
        
*/

{/*
     https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fvader-prod.s3.amazonaws.com%2F1657305099-sk8-hi-tapered-stackform-sneakers-1657305071.png%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D480%3A*&imgrefurl=https%3A%2F%2Fwww.seventeen.com%2Ffashion%2Fstyle-advice%2Fg1206%2Fcute-trendy-sneakers-for-girls%2F&tbnid=CVQh_Db7pku5GM&vet=12ahUKEwjg1ZaF2qz7AhUIHBoKHcOkBSkQMyhFegUIARDdAQ..i&docid=XGtf4fEKc5OAEM&w=480&h=652&q=sneakers%20shoes&hl=en&ved=2ahUKEwjg1ZaF2qz7AhUIHBoKHcOkBSkQMyhFegUIARDdAQ
               https://www.konga.com/product/breathable-casual-sneakers-5769210
               https://www.google.com/imgres?imgurl=https%3A%2F%2Fng.jumia.is%2Funsafe%2Ffit-in%2F300x300%2Ffilters%3Afill(white)%2Fproduct%2F30%2F878366%2F2.jpg%3F4938&imgrefurl=https%3A%2F%2Fwww.jumia.com.ng%2Fwomens-sneakers%2F&tbnid=vVwI6YK8se2H5M&vet=12ahUKEwjg1ZaF2qz7AhUIHBoKHcOkBSkQMygAegUIARCtAg..i&docid=ulHk2hPDHTxRdM&w=300&h=300&q=sneakers%20shoes&hl=en&ved=2ahUKEwjg1ZaF2qz7AhUIHBoKHcOkBSkQMygAegUIARCtAg
               
               */}
