import { Drawer } from "expo-router/drawer";
import { Image, View, Text } from "react-native";
import icons from "../constants/icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList } from "@react-navigation/drawer";
import tw from 'twrnc';

// const home = require("../assets/icons/home.png");

export default function layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: () => (
            <Ionicons name="home" size={20} color="black" />
          ),
        }}
      />
        <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          drawerIcon: () => (
            <FontAwesome name="user-circle-o" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        options={{
          drawerLabel: "Setting",
          title: "Setting",
          drawerIcon: () => (
            <Ionicons name="settings" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: "About",
          title: "about",
          drawerIcon: () => (
            <Ionicons name="ios-information-circle-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Rateus"
        options={{
          drawerLabel: "Rateus",
          title: "Rateus",
          drawerIcon: () => (
            <Ionicons name="star-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Helpcenter"
        options={{
          drawerLabel: "HelpCenter",
          title: "HelpCenter",
          drawerIcon: () => (
            <AntDesign name="customerservice" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Privacypolicy"
        options={{
          drawerLabel: "PrivacyPolicy",
          title: "PrivacyPolicy",
          drawerIcon: () => (
            <MaterialIcons name="local-police" size={20} color="black" />
          ),
        }}
      />
    </Drawer>
  );
}
