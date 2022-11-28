import React, { useState,useEffect } from 'react'
import { View,Text,Image, TextInput ,StyleSheet, ScrollView } from "react-native"
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
//import { Heels } from './Heels';
//let myArray:string[]=[];
const Contact = (props) => {
  const {id,title,description,image}=props.route.params.item
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
        </ScrollView>
        onPress={()=>navigation.navigate("Contact",item)}
       {navigation.getParam("title")}
       */}

        <Text>{id}</Text>
        <Image source={image} />
             
        <Text>{title}</Text>
          <Text>{description}</Text>
          
      </View>
    )
}

export default Contact
