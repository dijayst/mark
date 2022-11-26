import React, { useState,useEffect } from 'react'
import { View,Text, TextInput ,StyleSheet, ScrollView } from "react-native"
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
//let myArray:string[]=[];
export const Hy = (props) => {
/*
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
      console.log(res)
      console.log(res.data)
      setmyArray(res.data)
    })
    .catch(err=>{console.log(err)})
  })*/
  console.log("hello")
  
    return (
        
      <View>
     {/*   <ScrollView>
          {myArray.map((item)=>{
     return(
       <View key={item.id}>
         <Text>{item.body}</Text>
 
         <Text>{item.title}</Text>
 
       </View>
     )
          })}
        </ScrollView>
        onPress={()=>navigation.navigate("Contact",item)}
       {navigation.getParam("title")}
       */}


<TouchableOpacity  style={styles.jstouch} key={item.id} onPress={()=>props.navigation.navigate("Contact",{item:props.item,header:props.item.description})}>
              <Image source={props.item.image}/>
              <Image source={{uri:props.item.image}}/>
              <Image source={require("./image/images14.jpg")} style={styles.jsimage}/>
              <View style={styles.text}>
              <Text >{props.item.price}</Text>
              <Text >{props.item.title}</Text>
            </View>
             <View style={styles.jsicon}>
              <Icon  name={props.item.icon} color="yellow" size={20}/>
              <Icon name={props.item.icon} color="green" size={20}/>
              <Icon name={props.item.icon} color="green" size={20}/>
           </View>
            </TouchableOpacity>

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
  