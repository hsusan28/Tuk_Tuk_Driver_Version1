import { Drawer } from "expo-router/drawer";
import { Image, View, Text } from "react-native";
import icons from "../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList } from "@react-navigation/drawer";

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
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        options={{
          drawerLabel: "Setting",
          title: "Setting",
          drawerIcon: () => (
            <Image
              source={icons.setting}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: "About",
          title: "about",
          drawerIcon: () => (
            <Image
              source={icons.about}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Rateus"
        options={{
          drawerLabel: "Rateus",
          title: "Rateus",
          drawerIcon: () => (
            <Image
              source={icons.rate}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Helpcenter"
        options={{
          drawerLabel: "HelpCenter",
          title: "HelpCenter",
          drawerIcon: () => (
            <Image
              source={icons.help}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Privacypolicy"
        options={{
          drawerLabel: "PrivacyPolicy",
          title: "PrivacyPolicy",
          drawerIcon: () => (
            <Image
              source={icons.policy}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
              }}
            />
          ),
        }}
      />
    </Drawer>
  );
}
