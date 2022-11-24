import { Formik } from 'formik'
import JSON from "../db.json"
import React, { useState,useEffect } from 'react'
import { View,Text,ScrollView, TextInput ,StyleSheet,FlatList, Button, TouchableOpacity,Image, Dimensions } from "react-native"
//import { ScrollView } from 'react-native-gesture-handler'
import {createStackNavigator} from  '@react-navigation/stack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/FontAwesome';
//import {createBottomTabNavigator, createMaterTopTabNavigator} from  '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
//import { createAppContainer, createNavigationContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import Contact from '../route/Contact'
//import images1 from '../image/images1'
//import images4 from '../image/images4'
//import images6 from '../image/images6'

//import { Getsum } from '../Getsum'


import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { Colors } from 'react-native/Libraries/NewAppScreen'

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
 // const WIDTH=Dimensions.get("window").width;
  //const HEIGHT=Dimensions.get("window").height;
const {width,height}=Dimensions.get("window");
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
    id:2,image:require("../image/images11.jpg")
  },{
    id:3,image:require("../image/images10.jpg")
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
    //setclick(!click
   // console.log(click)
  
  
    //  ([{image:[],  name:"",review:""}]);
  const handlechange=(e)=>{
    const newhome={...home}
    newhome[e.target.id]=e.target.value
    sethome(newhome)
    console.log(newhome)
  console.log(home)
    
  }
  console.log(click)
  useEffect(() => {
    console.log(print)
    
  })
const [imgActive, setimgActive] = useState(0)
const handleimage=(nativeEvent)=>{
if(nativeEvent){
  const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
  if(slide != imgActive){
    setimgActive(slide);
  }
}
}
const footer =()=>{
  return(
    <View style={{
      height:height*0.25,justifyContent:"space-between",
      paddingHorizontal:20,
    }}><View style={{
      flexDirection:"row",justifyContent:"center",marginTop:20, }}>
 {
     heels.map((item)=>{
return(
  <View key={item.id} style={[styles.dot,imgActive===item && {backgroundColor:COLORS.white,width:25}]}>
    <Button title="helo"/>
  </View>
 
)
     })
   }
    </View>

    </View>

  )
}
  
  //const pressHandle=()=>{
    //navigation.push('Contact')  }
    return (
      <View style={styles.container}>
        
          <View>
            <TextInput placeholder="search for shoes"/></View>
            <ScrollView>
        <View style={styles.minibtn}>
          
<Button style={styles.minibutton} title="heels"  color="coral" onPress={handleclick}/>
<Button style={styles.minibutton} title="sneaker" color="coral" onPress={handlessneaker}/>
<Button style={styles.minibutton} title="sandle" color="coral" onPress={handlessandle}/>
</View >

  <View style={styles.imageview}>
{click?
<FlatList 
onScroll={({nativeEvent})=>handleimage(nativeEvent)}
pagingEnabled
horizontal
style={styles.imagev}
contentContainerStyle={{height:height * 0.75}}
keyExtractor={(item)=>item.id}
showsHorizontalScrollIndicator={false}
data={heels}
 renderItem={({item})=>{return(<TouchableOpacity>
   <Image style={{height:'75%',width,resizeMode:"contain"}} source={item.image} />
 </TouchableOpacity>)}}/> 
 :null}
<Icon name={"home"} size={35}/>
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
pagingEnabled
horizontal
showsHorizontalScrollIndicator={false}
keyExtractor={(item)=>item.id}
data={sandles}
style={styles.imagev}
 renderItem={({item})=>{return(<TouchableOpacity>
   <Image source={item.image}/>
 </TouchableOpacity>)}}/>
 :null}
</View>

 <View  >
   <Text>recent</Text>
   <Image source={require("../image/images14.jpg")} style={styles.jsimage}/>
            
   <Image source={require("../image/images1.jpg")}/>
   
   <Image source={require("../image/images4.jpg")}/>

   <Image source={require("../image/images6.jpg")}/>
 </View>
 </ScrollView>
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
backgroundColor:"red",
justifyContent:"space-between",
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
  marginTop:20,
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
}
})
export default Home
