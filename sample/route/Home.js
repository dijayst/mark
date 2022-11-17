import { Formik } from 'formik'
import JSON from "../db.json"
import React, { useState,useEffect } from 'react'
import { View,Text,ScrollView, TextInput ,StyleSheet,FlatList, Button, TouchableOpacity,Image } from "react-native"
//import { ScrollView } from 'react-native-gesture-handler'
import {createStackNavigator} from  '@react-navigation/stack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/FontAwesome';
//import {createBottomTabNavigator, createMaterTopTabNavigator} from  '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
//import { createAppContainer, createNavigationContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import Contact from '../route/Contact'
//import images1 from '../image/images1
//import { Getsum } from '../Getsum'


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
  const [click, setclick] = useState(false)
  const handleclick=()=>{
    setclick(!click)
  }
  const [home, sethome] = useState(namelist)
  const print=JSON
  const heels=[{
    id:1,image:require("../image/images14.jpg")
  },{
    id:2,image:require("../image/images14.jpg")
  },{
    id:3,image:require("../image/images14.jpg")
  }]
  //const handleclick=()=>{heels.map((item)=>{(<TouchableOpacity key={item.id}><Image source={item.image} /></TouchableOpacity>)})
    //setclick(!click)
    //console.log(heels)}
  
  
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
    console.log(click)
  })

  //const pressHandle=()=>{
    //navigation.push('Contact')  }
    return (
      <View style={styles.container}>
        <View><TextInput placeholder="search for shoes"/></View>
        <View>
<Button title="heels" onPress={handleclick}/>

</View>
{click?
<FlatList 
keyExtractor={(item)=>item.id}
data={heels}
 renderItem={({item})=>{return(<TouchableOpacity>
   <Image source={item.image}/>
 </TouchableOpacity>)}}/>
 :null}
 <View>
   <Text>recent</Text>
 </View>
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
justifyContent:"center",
},
jsicon:{
  display:"flex",
  flexWrap:"wrap",
  flexDirection:"row",
  justifyContent:"center",
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
marginTop:17,
marginLeft:17,
padding:5,

  },
  jsimage:{
    width:114,
    height:70,
    borderRadius:5,
    margin:-2,
  },
  text:{
    backgroundColor:"yellow",
    height:45,
    borderRadius:5,
    margin:-2,
    width:114,
    marginTop:3,
  },

})
export default Home
