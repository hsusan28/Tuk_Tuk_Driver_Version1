import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import DrawerNavigator from '../Drawer/appDrawer';
import index from '../app/index';
import Setting from '../app/Setting';
import Rateus from '../app/Rateus';
import profile from '../app/profile';
import Privacypolicy from '../app/Privacypolicy';
import Helpcenter from '../app/Helpcenter';
import about from '../app/about';
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return ( <NavigationContainer>
        <Stack.Navigator initialRouteName = 'index'>
          <Stack.Screen name = "home" options = {{ headerShown: false }} component = {index}/> 
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