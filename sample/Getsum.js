import { useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {Nav} from './Nav'
import {Formik} from 'formik'
import JSON from "./db.json"
import { View,Text,ScrollView, TextInput ,StyleSheet, Button, TouchableOpacity,Image } from "react-native"


export const Getsum = () => {
  const print=JSON
 
    const [search, setsearch] = useState("")
    const handlechange=()=>{
        setsearch(search)
    }
    return (
        <View style={styles.container}>
                <ScrollView>
          <View style={styles.jsvarra}>
          {
          print.map((item)=>{return(
            <TouchableOpacity  style={styles.jstouch} key={item.id}>
              <Image source={item.image}/>
              <Image source={require("../image/images1.jpg")} style={styles.jsimage}/>
              <View style={styles.text}>
              <Text >{item.price}</Text>
              <Text >{item.title}</Text>
            </View>
             <View style={styles.jsicon}>
              <Icon  name={item.icon} color="yellow" size={20}/>
              <Icon name={item.icon} color="green" size={20}/>
              <Icon name={item.icon} color="green" size={20}/>
           </View>
            </TouchableOpacity>
          )})
        }</View>
</ScrollView>
      
        </View>
    )
}
/*
const styles =StyleSheet.create({
    container:{
      backgroundColor:'red',
      flexDirection:'column',
    paddingHorizontal:20
    },
    body:{
      backgroundColor:'green',
      padding:40,
      marginTop:5,
      fontSize:20,
    },
    bold:{
      fontWeight:'bold',
      backgroundColor:'blue',
      borderRadius:12,
      width:150,
      height:30
      }
  })
*/

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
