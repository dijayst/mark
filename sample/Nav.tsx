
import {createStackNavigator} from  'react-navigation-stack'
import { createAppContainer } from "react-navigation";
import React from 'react'
import Home from './Home';
import Contact from "./Contact";


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

const Nav = createStackNavigator(screen);

export default createAppContainer(Nav);
