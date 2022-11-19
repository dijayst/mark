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
  const [sneaker, setsneaker] = useState(false)
  const handlessneaker=()=>{
    setsneaker(!sneaker)
  }
  const [sandle, setsandle] = useState(false)
  const handlessandle=()=>{
    setsneaker(!sandle)
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

  
  const sneakers=[{
    id:1,image:require("../image/images13.jpg")
  },{
    id:2,image:require("../image/images13.jpg")
  },{
    id:3,image:require("../image/images13.jpg")
  }]

  
  const sandles=[{
    id:1,image:require("../image/images12.jpg")
  },{
    id:2,image:require("../image/images12.jpg")
  },{
    id:3,image:require("../image/images12.jpg")
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
        <View style={styles.minibtn}>
          
<Button style={styles.minibutton} title="heels"  color="coral" onPress={handleclick}/>
<Button style={styles.minibutton} title="sneaker" color="coral" onPress={handlessneaker}/>
<Button style={styles.minibutton} title="sandle" color="coral" onPress={handlessandle}/>
</View >

  <View style={styles.imageview}>
{click?
<FlatList 
keyExtractor={(item)=>item.id}
style={styles.imagev}
data={heels}
 renderItem={({item})=>{return(<TouchableOpacity>
   <Image source={item.image}/>
 </TouchableOpacity>)}}/>
 :null}

{sneaker?
<FlatList 
keyExtractor={(item)=>item.id}
style={styles.imagev}
data={sneakers}
 renderItem={({item})=>{return(<TouchableOpacity>
   <Image source={item.image}/>
 </TouchableOpacity>)}}/>
 :null}

{sandle?
<FlatList 
keyExtractor={(item)=>item.id}
data={sandles}
style={styles.imagev}
 renderItem={({item})=>{return(<TouchableOpacity>
   <Image source={item.image}/>
 </TouchableOpacity>)}}/>
 :null}
</View>
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
minibtn:{
flexDirection:"row",
width:199,
height:40,
backgroundColor:"red"
},
minibutton:{
width:40,
height:40,
borderRadius:15,
marginLeft:100,
padding:10,
fontSize:100,

},
imageview:{
  backgroundColor:"red",
  flexDirection:"column",
  marginTop:20,
  height:250,
  width:280,
},

imagev:{
  width:240,
  height:230,
  borderRadius:5,

}
})
export default Home
