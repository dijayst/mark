import { Formik } from 'formik'
import React, { useState } from 'react'
import { View,Text,ScrollView, TextInput ,StyleSheet, Button } from "react-native"
//import { ScrollView } from 'react-native-gesture-handler'
const namelist=[{image:[],
  name:"",
 review:""}]
      type nameprop={name:{image:string,
        name:string,
       review:string}[]}      

const Home = ({navigation}) => {
  const [home, sethome] = useState([namelist]);
  const handlechange=()=>{}

  const pressHandle=()=>{
  //  navigation.navigate('Contact')
  navigation.push('Contact')
  }
    return (
      <View>
        <Formik
        initialValues={{home}}
        onSubmit={(values)=>{}}>
{(props)=>{return(<View>
  <TextInput placeholder="ënter your review" onChangeText={props.handleChange('title')} value={props.values.title} />
</View>)}}
        </Formik>
          <Button title="homeg"/>
          <Button title='click on me' onPress={()=>{navigation.navigate('Contact')}} />
      </View>
        )
}

export default Home
