import { Formik } from 'formik'
import JSON from "../db.json"
import React, { useState,useEffect } from 'react'
import { View,Text,ScrollView, TextInput ,StyleSheet, Button, TouchableOpacity,Image } from "react-native"
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

import { Item } from 'react-native-paper/lib/typescript/components/List/List'

const namelist=[{image:[],
  name:"",
 review:""}]

    /*  type nameprop={name:{image:string,
        name:string,
       review:string}[]}      
*/

       
const AuthStacck= createStackNavigator();
//const AuthStack= createBottomTabNavigator();
const Home = ({navigation}) => {
  const [home, sethome] = useState(namelist)
  const print=JSON
  //  ([{image:[],  name:"",review:""}]);
  const handlechange=(e)=>{
    const newhome={...home}
    newhome[e.target.id]=e.target.value
    sethome(newhome)
    console.log(newhome)
  console.log(home)
    
  }
  useEffect(() => {
    console.log(print)
  })

  const pressHandle=()=>{
  //  navigation.navigate('Contact')
  navigation.push('Contact')
  }
    return (
      <View>
       <ScrollView>
                   <Text style={styles.category}>
            Main Category
          </Text>
          <View style={styles.jsvarra}>
          {
          print.map((item)=>{return(
            <TouchableOpacity style={styles.jstouch} key={item.id}>
              <Image source={item.image}/>
      
              <Text style={styles.text}>{item.price}</Text>
              <Text style={styles.text}>{item.title}</Text>
             <View style={styles.jsvarra}>
              <Icon  name={item.icon} color="yellow" size={20}/>
              <Icon name={item.icon} color="green" size={20}/>
              <Icon name={item.icon} color="green" size={20}/>
           </View>
            </TouchableOpacity>
          )})
        }</View>
        <Text>helo</Text>
          <Button title="homeg"/>
          <Button title='click on me' onPress={()=>{navigation.navigate('Getsum')}} />
      <Image source={require("../image/images1.jpg")}/>
          <Button title='click me' onPress={()=>{alert("welcome")}} />
      
      <Getsum/>
</ScrollView>
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
  },
 jsvarra:{
display:"flex",
flexWrap:"wrap",
flexDirection:"row",
justifyContent:"center"
},
jsicon:{
display:"flex",
flexDirection:"row",

},
  jstouch:{
backgroundColor:"red",
width:120,
height:120,
borderRadius:5,
marginTop:4,
marginLeft:15,
padding:20,

  },
  text:{
    justifyContent:"center",
    backgroundColor:"yellow",

  }
})
export default Home
