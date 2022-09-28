import { useState } from "react"
import { View,Text, TextInput ,StyleSheet } from "react-native"
//import Icon from 'react-native-vector-icons/FontAwesome';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



   /* type GetsumProps ={
        namee :string
        
    }
   **/

export const Getsum = () => {
    const [search, setsearch] = useState("")
    const handlechange=()=>{
        setsearch(search)
    }
    return (
        <View>
            <View>
  {/*      <Icon name="ios-book"  size ={30}color="yellow" />
            <FontAwesome5 name={'comments'} size={100}/>*/}

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
      flex:1,
    paddingHorizontal:20
    },
    body:{
      backgroundColor:'yellow',
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
  