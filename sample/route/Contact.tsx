import React, { useState,useEffect } from 'react'
import { View,Text,Image, TextInput ,StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Navigation } from 'react-native-n';
import { Cart } from './Heels';
//let myArray:string[]=[];
const Contact = (props,{navigation}) => {
  const [comment, setcomment] = useState("")
  const handlecomment=(val)=>{
setcomment(val)
  }
  const [storecomment, setstorecomment] = useState([])
const  handlestorecomment =()=>{
  setstorecomment((storecomment)=>[...storecomment,comment])
  //props.navigation.navigate("Cart",{...cartt})
}
  const {id,title,description,Instock,image,icon,icon1,icon2,icon3,icon4,Cart,price}=props.route.params.item
  //const [cartt, setcartt] = useState([])
  const handleimage=()=>{
    console.log("yephjjh")
    const newimage={...props.route.params.item}
    //setcartt(cartt=>[...cartt,pronewimage])
  props.navigation.navigate("Cart",{comment})
  }

  const [reviews, setreviews] = useState(0)
 
  const [icons, seticon] = useState(false)
const handleicon=()=>{
if(icons===false){
  setreviews(reviews+1)
  seticon(!icons)
      }
      return false
}
  const [icons1, seticon1] = useState(false)
  const handleicon1=()=>{
    if(icons1===false){
      setreviews(reviews+1)
      seticon1(!icons1)
          }
          return false
    }
  const [icons2, seticon2] = useState(false)
  const handleicon2=()=>{
    if(icons2===false){
      seticon2(!icons2)
      setreviews(reviews+1)
    }
    return false
    }
  const [icons3, seticon3] = useState(false)
  const handleicon3=()=>{
    if(icons3===false){
      seticon3(!icons3)
      setreviews(reviews+1)
    }
    return false
  }
  const [icons4, seticon4] = useState(false)
  const handleicon4=()=>{
    if(icons4===false){
      setreviews(reviews+1)
      seticon4(!icons4)
    }
    return false
  }
  
  console.log(icons)
  console.log(icons1)
  console.log(icons2)
  console.log(icons3)
  console.log(icons4)
  
  
  
  
 // console.log(cartt)
  console.log(storecomment)
  console.log(comment)
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
          {icons?<Icon name={icon} color="yellow" size={20} onPress={handleicon}/>:<Icon name={icon} color="pink" onPress={handleicon} size={20} />}
          {icons1?<Icon name={icon1} color="yellow" size={20} onPress={handleicon1}/>:<Icon name={icon} color="pink" size={20} onPress={handleicon1} />}
          {icons2?<Icon name={icon2} color="yellow" size={20} onPress={handleicon2}/>:<Icon name={icon} color="pink" size={20} onPress={handleicon2}/>}
          {icons3?<Icon name={icon3} color="yellow" size={20} onPress={handleicon3}/>:<Icon name={icon} color="pink" size={20} onPress={handleicon3} />}
          {icons4?<Icon name={icon4} color="yellow" size={20} onPress={handleicon4}/>:<Icon name={icon} color="pink" size={20} onPress={handleicon4} />}
        <Text>{reviews}Review</Text>
        </View>
        <View>
          <TextInput style={{backgroundColor:"green",width:180,height:33,marginLeft:5}} placeholder="write a comment" onChangeText={handlecomment}/>
          <TouchableOpacity style={{backgroundColor:"red",width:50,height:33,marginTop:-33,marginLeft:189}} onPress={handlestorecomment}><Text>clicked</Text></TouchableOpacity>
    {storecomment.map((item)=>{return(<View key={item}><Text>{item}</Text></View>)})}
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
