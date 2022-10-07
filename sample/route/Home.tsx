import React from 'react'
import { View,Text, TextInput ,StyleSheet, Button } from "react-native"


const Home = ({navigation}) => {
  const pressHandle=()=>{
  //  navigation.navigate('Contact')
  navigation.push('Contact')
  }
    return (
      <View>
          <Text>Homet</Text>
          <Button title='click on me' onPress={()=>{navigation.navigate('Contact')}} />
      </View>
        )
}

export default Home
