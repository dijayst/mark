import React, { useState,useEffect } from 'react'
import { View,Text, TextInput ,StyleSheet, ScrollView } from "react-native"
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
//let myArray:string[]=[];
const Contact = ({navigation}) => {
  const [myArray, setmyArray] = useState([])
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
        </ScrollView>*/}

        <Text>{myArray}</Text>
        <Text>{navigation.getParam("title")}</Text>
          <Text>Contact</Text>
      </View>
    )
}

export default Contact