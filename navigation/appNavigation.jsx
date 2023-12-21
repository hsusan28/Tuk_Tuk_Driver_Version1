import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '../Drawer/appDrawer';
import Home from '../DrawerScreens/Home';
import Setting from '../DrawerScreens/Setting';
import Rateus from '../DrawerScreens/Rateus';
import profile from '../DrawerScreens/profile';
import Privacypolicy from '../DrawerScreens/Privacypolicy';
import Helpcenter from '../DrawerScreens/Helpcenter';
import about from '../DrawerScreens/about';
import GetStarted from '../Page/GetStarted';
import Login from '../Page/Login';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return ( <NavigationContainer>
        <Stack.Navigator initialRouteName = 'GetStarted'>
          <Stack.Screen name = "GetStarted" options = {{ headerShown: false }} component = {GetStarted}/> 
          <Stack.Screen name = "Login" options = {{ headerShown: false }} component = {Login}/> 
          <Stack.Screen name = "home" options = {{ headerShown: false }} component = {Home}/> 
          <Stack.Screen name = "profile" options = {{ headerShown: false }} component = {profile }/> 
          <Stack.Screen name = "setting" options = { { headerShown: false }} component = { Setting }/> 
        <Stack.Screen name = "about" options = {{ headerShown: false }} component = { about }/> 
        <Stack.Screen name = "rateus" options = {{ headerShown: false }} component = { Rateus }/> 
        <Stack.Screen name = "helpcenter" options = {{ headerShown: false }} component = { Helpcenter }/> 
        <Stack.Screen name = "privacypolicy" options = {{ headerShown: false }} component = { Privacypolicy }/> 

          </Stack.Navigator> 
        </NavigationContainer>
    )
}