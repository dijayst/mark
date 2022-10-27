import { Formik } from 'formik'
import React, { useState } from 'react'
import { View,Text,ScrollView, TextInput ,StyleSheet, Button } from "react-native"
//import { ScrollView } from 'react-native-gesture-handler'
import {createStackNavigator} from  '@react-navigation/stack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/FontAwesome';
//import {createBottomTabNavigator, createMaterTopTabNavigator} from  '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
//import { createAppContainer, createNavigationContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import Contact from './Contact'
import { Getsum } from '../Getsum'

const namelist=[{image:[],
  name:"",
 review:""}]

      type nameprop={name:{image:string,
        name:string,
       review:string}[]}      


       
const AuthStacck= createStackNavigator();
//const AuthStack= createBottomTabNavigator();
const Home = ({navigation}) => {
  const [home, sethome] = useState(namelist)
//  ([{image:[],  name:"",review:""}]);
  const handlechange=(e)=>{
    const newhome={...home}
    newhome[e.target.id]=e.target.value
    sethome(newhome)
    console.log(newhome)
  console.log(home)
    
  }

  const pressHandle=()=>{
  //  navigation.navigate('Contact')
  navigation.push('Contact')
  }
    return (
      <View>
        
          <Text style={styles.category}>
            Main Category
          </Text>
        <Text>helo</Text>
          <Button title="homeg"/>
          <Button title='click on me' onPress={()=>{navigation.navigate('Getsum')}} />
      
          <Button title='click me' onPress={()=>{alert("welcome")}} />
      
      <Getsum/>

      </View>
        )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:"white"
  },
  category:{
    marginBottom:50,
    marginLeft:60,
  fontSize:30,
  }
})
export default Home
