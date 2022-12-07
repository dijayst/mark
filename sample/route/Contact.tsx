import React, { useState,useEffect } from 'react'
import { View,Text,Image, TextInput ,StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import axios from "axios";

import Icon, { Button } from 'react-native-vector-icons/FontAwesome';
//import { Navigation } from 'react-native-n';
import { Cart } from './Heels';
//let myArray:string[]=[];
const Contact = (props,{navigation}) => {
  
  const {id,title,description,Instock,image,icon,Cart,price}=props.route.params.item
  const [cart, setcart] = useState([])
  const handleimage=()=>{
    console.log("yephjjh")
    const newimage={...props.route.params.item}
    setcart(cart=>[...cart,newimage])
  props.navigation.navigate("Cart",{...cart})
  }
  console.log(cart)
/*
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
      console.log(res)
      console.log(res.data)
      setmyArray(res.data)
    })
    .catch(err=>{console.log(err)})
  })*/
  console.log(props.route.params.item)
  
    return (
        
      <View>
        <ScrollView>
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
        <Image source={image} style={{width:260,height:290,justifyContent:"center"}} />
        <Text style={{fontSize:21,fontWeight:"bold",}}>{title}</Text>
       
        <View style={styles.jsicon}>
        <Icon name={icon} color="green" size={20}/>
        <Icon name={icon} color="green" size={20}/>
        <Icon name={icon} color="green" size={20}/>
        <Icon name={icon} color="green" size={20}/>
        <Icon name={icon} color="green" size={20}/>
        <Text>0Review</Text>
        </View>
       <View style={{display:"flex",flexDirection:"row"}}>
          <Text style={{justifyContent:"flex-start"}}>{Instock} out of stock</Text> 
          <Text style={{marginLeft:170,fontSize:15,fontWeight:"bold"}}>{price}</Text>
        </View>
          <Text>{description}</Text>
        
      <TouchableOpacity style={{backgroundColor:"green"}} onPress={handleimage}><Text>{Cart}</Text></TouchableOpacity>
       
          </ScrollView>
      </View>
    )
}

export default Contact

const styles=StyleSheet.create({
  container:{
    backgroundColor:"green"
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
  justifyContent:"flex-start",
  },
  jstouch:{
backgroundColor:"white",
width:120,
height:130,
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
   // alignItems:"center",
  },
  text:{
    backgroundColor:"white",
    height:45,
    borderRadius:5,
    margin:-2,
    width:114,
    marginTop:3,
  },

})
