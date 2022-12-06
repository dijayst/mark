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
//import  Heels from '../route/Heels'
import { Heels } from './Heels';
import { Sneaker } from './Sneaker';
import { Sandle } from './Sandle';
import { print } from './variable';
import { heels } from './variable';
import {firstslide} from './variable'
import { minbutt } from './variable';
import { sandles } from './variable';
import { sneakers } from './variable';

//import images1 from '../image/images1'
//import images4 from '../image/images4'
//import images6 from '../image/images6'
//import { Getsum } from '../Getsum'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Recent } from './Recent'
import { Getsum } from '../Getsum'

const namelist=[{image:[],
  name:"",
 review:""}]

    /*  type nameprop={name:{image:string,
        name:string,
       review:string}[]}      
*/

       
const AuthStacck= createStackNavigator();
//const AuthStack= createBottomTabNavigator();
export const Home = ({navigation}) => {
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
  //const print=JSON
  /*const heels=[{
    id:1,image:require("../image/images14.jpg")
  },{
    id:2,image:require("../image/images11.jpg")
  },{
    id:3,image:require("../image/images10.jpg")
  }]
*/
  
  
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
        
           <ScrollView>
      

{/*

            <Text >categories</Text>
       
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
 <View style={styles.imageview}></View>
 







   <View style={styles.minibtn}>
         <TouchableOpacity style={styles.minibutton} onPress={handleclick}>
           <Image source={require("../image/images.jpeg")}style={styles.minibutton1}/><Text>heels</Text></TouchableOpacity>
          <TouchableOpacity style={styles.minibutton} onPress={handlessneaker}>       
              <Image source={require("../image/images18.jpg")}style={styles.minibutton1}/>
          <Text>sneakers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.minibutton} onPress={handleclick}>       
               <Image source={require("../image/images13.jpg")}style={styles.minibutton1}/><Text>heels</Text></TouchableOpacity>
          <TouchableOpacity style={styles.minibutton} onPress={handlessneaker}>      
                <Image source={require("../image/images13.jpg")}style={styles.minibutton1}/><Text>sneakers</Text></TouchableOpacity>
        <TouchableOpacity style={styles.minibutton}  onPress={handlessandle}>        
            <Image source={require("../image/images13.jpg")}style={styles.minibutton1}/><Text>sandle</Text></TouchableOpacity>
</View >

  <View style={{marginTop:60}}>
  <ScrollView>
     {click?<Heels  heels={heels} handleimage={handleimage} height={height}/>:null}
 {sandle ?<Sandle sandles={sandles} handleimage={handleimage} height={height} />:null}
{sneaker? <Sneaker  sneakers={sneakers} handleimage={handleimage} height={height}/> :null}

 */}

<Getsum navigation={navigation}/>

<Recent/>
 </ScrollView>
      </View>
        )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:"yellow"
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
    width:214,
    height:90,
    borderRadius:5,
    margin:-2,
    padding:5,
    marginTop:15,
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
//justifyContent:"space-between",
//marginTop:-175,
//marginLeft:-5,
},
minibutton:{
  backgroundColor:"white",
width:55,
height:90,
borderRadius:25,
marginLeft:10,
padding:10,
fontSize:100,
alignItems:"center",
},
minibutton1:{
height:60,
width:48,
borderRadius:25,
//marginLeft:-2,
marginTop:-5,
},
clickimage:{

width:155,
height:190,
marginLeft:10,
padding:10,
fontSize:100,
},
imageview:{
//backgroundColor:"red",
  marginTop:-90,
  height:250,
  width:280,
  alignContent:"center",
  
},

imageview1:{
 // backgroundColor:"red",
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
}
})
//export default Home
