// import { Drawer } from "expo-router/drawer";
// import { Image, View, Text } from "react-native";
// import icons from "../constants/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
 import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import {
//   DrawerItemList,
//   createDrawerNavigator,
// } from "@react-navigation/drawer";
// import tw from "twrnc";
//import { DrawerContentScrollView } from "@react-navigation/drawer";

import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-gesture-handler";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { MaterialIcons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigatonContainer } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
//import { Image } from "react-native-svg";
import tw from 'twrnc';
////
import HomeScreen from "./Home";
import SettingScreen from "./Setting";
import HelpCenterScreen from "./Helpcenter";
import ProfileScreen from "./profile";
import RateusScreen from "./Rateus";
import PrivacypolicyScreen from "./Privacypolicy";
import AboutScreen from "./about";

const Drawer = createDrawerNavigator();
export default function _layout() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#fff",
        },
        drawerLabelStyle: {
          color: "#111",
        },
      }}
      // drawerContent={(props) => {
      //   return (
      //     <SafeAreaView>
      //       <View
      //         style={{
      //           height: 200,
      //           width: "100%",
      //           justifyContent: "center",
      //           alignItems: "center",
      //           borderBottomColor: "#f4f4f4",
      //           borderBottomWidth: 1,
      //           paddingBottom: 12,
      //         }}
      //       ></View>
      //       <DrawerItemList {...props} />
      //     </SafeAreaView>
      //   );
      // }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: () => <FontAwesome name="home" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          drawerLabel: "profile",
          title: "Profile",
          drawerIcon: () => <Feather name="user" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerLabel: "Setting",
          title: "Setting",
          drawerIcon: () => (
            <Ionicons name="settings" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Helpcenter"
        component={HelpCenterScreen}
        options={{
          drawerLabel: "Helpcenter",
          title: "Helpcenter",
          drawerIcon: () => (
            <FontAwesome5 name="headset" size={24} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="Privacypolicy"
        component={PrivacypolicyScreen}
        options={{
          drawerLabel: "Privacypolicy",
          title: "Privacy Policy",
          drawerIcon: () => (
            <MaterialIcons name="privacy-tip" size={24} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="about"
        component={AboutScreen}
        options={{
          drawerLabel: "About",
          title: "About",
          drawerIcon: () => (
            <AntDesign name="questioncircle" size={24} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="Rateus"
        component={RateusScreen}
        options={{
          drawerLabel: "Rateus",
          title: "Rate us",
          drawerIcon: () => (
            <MaterialIcons name="star-rate" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// import { Drawer } from "expo-router/drawer";
// import { Image, View, Text } from "react-native";
// import icons from "../constants/icons";
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from "react-native-safe-area-context";
// import { DrawerItemList } from "@react-navigation/drawer";
// import tw from 'twrnc';

// // const home = require("../assets/icons/home.png");

// export default function layout() {
//   return (
//     <Drawer>
//       <Drawer.Screen
//         name="Home"
//         options={{
//           drawerLabel: "Home",
//           title: "Home",
//           drawerIcon: () => (
//             <Ionicons name="home" size={20} color="black" />
//           ),
//         }}
//       />
//         <Drawer.Screen
//         name="profile"
//         options={{
//           drawerLabel: "Profile",
//           title: "Profile",
//           drawerIcon: () => (
//             <FontAwesome name="user-circle-o" size={20} color="black" />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Setting"
//         options={{
//           drawerLabel: "Setting",
//           title: "Setting",
//           drawerIcon: () => (
//             <Ionicons name="settings" size={20} color="black" />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="about"
//         options={{
//           drawerLabel: "About",
//           title: "about",
//           drawerIcon: () => (
//             <Ionicons name="ios-information-circle-outline" size={20} color="black" />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Rateus"
//         options={{
//           drawerLabel: "Rateus",
//           title: "Rateus",
//           drawerIcon: () => (
//             <Ionicons name="star-outline" size={20} color="black" />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Helpcenter"
//         options={{
//           drawerLabel: "HelpCenter",
//           title: "HelpCenter",
//           drawerIcon: () => (
//             <AntDesign name="customerservice" size={20} color="black" />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Privacypolicy"
//         options={{
//           drawerLabel: "PrivacyPolicy",
//           title: "PrivacyPolicy",
//           drawerIcon: () => (
//             <MaterialIcons name="local-police" size={20} color="black" />
//           ),
//         }}
//       />
//     </Drawer>
//   );
// }
