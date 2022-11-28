import React, { useState,useEffect } from 'react'
import { View,Text, TextInput ,StyleSheet, ScrollView,FlatList,TouchableOpacity,Image } from "react-native"

//let myArray:string[]=[];
export const Sandle = ({sandles,handleimage,height}) => {
 // const {width,height}=Dimensions.get("window");

  console.log("hello")
  
    return (
        
      <View>
        
<FlatList 
onScroll={({nativeEvent})=>handleimage(nativeEvent)}
pagingEnabled
horizontal
style={styles.imagev}
contentContainerStyle={{height:height * 0.75}}
keyExtractor={(item)=>item.id}
showsHorizontalScrollIndicator={false}
data={sandles}
 renderItem={({item})=>{return(<TouchableOpacity>
   <Image style={styles.sandleimage} source={item.image} />
 </TouchableOpacity>)}}/> 
 
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

sandleimage:{

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
  