import React, { useState,useEffect } from 'react'
import { View,Text, TextInput ,StyleSheet, ScrollView,FlatList,TouchableOpacity,Image } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from  '@react-navigation/stack'
//let myArray:string[]=[];
export const Heels = (props) => {
 // const {width,height}=Dimensions.get("window");

  //navigation.push('Contact')
  //<Hy key={Math.random()} item={item} navigation={navigation}/>

  console.log("hello")
  
    return (
        
      <View style={styles.container}>
          <TextInput placeholder="search for shoes" style={{width:200,backgroundColor:"red"}}/>
     <Icon name={"star"} color="green" size={35} onPress={()=>props.navigation.navigate("Cart")}/>
     
      </View>
    )
}


export const Cart = (props) => {
  // const {width,height}=Dimensions.get("window");
 
   console.log("hello")
   
     return (
         
       <View style={styles.container}>
           <TextInput placeholder="search for shoes" style={{width:200,backgroundColor:"red"}}/>
      <Icon name={"star"} color="green" size={35} />
      {props.cart}
      
       </View>
     )
 }
 
 


 
export const Profile = () => {
  // const {width,height}=Dimensions.get("window");
 
   console.log("hello")
   
     return (
         
       <View style={styles.container}>
         <TextInput placeholder="profilepic"/>
          <TextInput placeholder="firstname"/>
          <TextInput placeholder="lastname"/>

       </View>
     )
 }
 
 
 
 
 
 


const styles=StyleSheet.create({
  container:{
    //backgroundColor:"white",
    display:"flex",
    flexDirection:"row"
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
    height:90,
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
//backgroundColor:"red",
justifyContent:"space-between",
},
minibutton:{
  backgroundColor:"coral",
width:55,
height:90,
borderRadius:25,
marginLeft:10,
padding:10,
fontSize:100,
},

clickimage:{

width:155,
height:190,
marginLeft:10,
padding:10,
fontSize:100,
},
imageview:{
  backgroundColor:"red",
  marginTop:70,
  height:250,
  width:280,
  alignContent:"center",
  
},
imagev:{
  width:240,
  //height:240,
  borderRadius:5,
  margin:2,
  flexDirection:"row",
},
wrap:{
position:"absolute",
bottom:0,
flexDirection:"row",
alignSelf:"center",
},
dotactive:{margin:3,
  color:"red",
},
dot:{
//margin:3,
//color:"black"
height:2.5,
width:10,
backgroundColor:"grey",
marginHorizontal:3,
},/*
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
  */
  })
  