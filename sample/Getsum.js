import { useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {Nav} from './Nav'
import {Formik} from 'formik'
import JSON from "./db.json"
//import Hy from "./route/Hy"
import {createStackNavigator} from  '@react-navigation/stack'
import { View,Text,ScrollView, TextInput ,StyleSheet, Button, TouchableOpacity,Image } from "react-native"
import { print } from "./route/variable";
import { Heels } from "./route/Heels";


export const Getsum = (props) => {
  //const print=JSON
 
    const [search, setsearch] = useState("")
    const handlechange=()=>{
        setsearch(search)
    }

    
  //const pressHandle=()=>{    navigation.navigate('Contact')
  //navigation.push('Contact')}
  //<Hy key={Math.random()} item={item} navigation={navigation}/>


    return (
        <View style={styles.container}>
                <ScrollView>
          <View style={styles.jsvarra}>
          
          {
          print.map((item)=>{return(
            
<TouchableOpacity  style={styles.jstouch} key={item.id} onPress={()=>props.navigation.navigate("Contact",{item})}>
              <Image source={item.image}style={styles.jsimage}/>
              <Text style={{fontWeight:"bold",color:"#525252",fontSize:16}}>{item.price}</Text>
              <Text  style={{color:"grey",fontSize:12,height:17}}>{item.title}</Text>
          
             <View style={styles.jsicon}>
              <Icon  name={item.icon} color="yellow" size={17}/>
              <Icon name={item.icon} color="yellow" size={17}/>
              <Icon name={item.icon} color="yellow" size={17}/>
           </View>
            </TouchableOpacity>
          )})}
    
        </View>
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
    backgroundColor:"#ecf9e0"
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
