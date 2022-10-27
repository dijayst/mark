import { useState } from "react"
import { View,Text, TextInput ,StyleSheet, TouchableHighlight } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {Nav} from './Nav'
import {Formik} from 'formik'
import {Avatar,Button} from 'react-native-paper'

export const Getsum = () => {

    const [search, setsearch] = useState("")
    const handlechange=()=>{
        setsearch(search)
    }
    return (
        <View style={styles.container}>
                <TextInput
                placeholder="search"
                onChangeText={handlechange}/>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
      backgroundColor:'white',
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
