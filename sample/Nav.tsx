
import {createStackNavigator} from  'react-navigation-stack'
//import { createAppContainer, createNavigationContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Home from './route/Home';
import Contact from "./route/Contact";


   /* type GetsumProps ={
        namee :string
        
    }
**/
const screen={
  Home:{
    screen:Home
  },
  Contact:{
   screen:Contact
  }
}

//const Nav = createStackNavigator(screen);

//export default createAppContainer(Nav);
const AuthStack=createStackNavigator();
export const Nav = () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home" component={Home}/>
    </AuthStack.Navigator>
  </NavigationContainer>
  
);
