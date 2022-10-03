import { useState } from "react"
import { View,Text, TextInput ,StyleSheet, NativeAppEventEmitter } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {NavigationContainer} from 'react-navigation/native'
//import Nav from './Nav'
import {Formik} from 'formik'

export const Getsum = () => {

    const [search, setsearch] = useState("")
    const handlechange=()=>{
        setsearch(search)
    }
    return (
        <View style={styles.container}>
            <Formik
            initialValues={{titles:''}}
            onSubmit={(values)=>{}}
            >

            </Formik>
            <View style={styles.body}>
   <Icon name={"book"}  size ={30}color="yellow" />
            <FontAwesome5 name={'home'} size={100} />
            <Text>whyt</Text>
                <Text>Home</Text>
                <Text>getw</Text>
            </View>
            <View>
                <TextInput
                placeholder="search"
                onChangeText={handlechange}/>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
      backgroundColor:'black',
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