import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';

const tukLogo=require("../assets/icons/profile.png")

export default function ProfileScreen(){
    const navigation = useNavigation();
    return(
        <View style={tw`flex-1`}>
            <View style={tw`flex-1 items-center mt-5`} >
            <Image source={tukLogo} style={tw`rounded-full w-20 h-20`}/>
            <Text style={tw`text-gray-700 mt-2`}>@Driver-User-Name</Text>
            </View>
          <View style={tw`flex-1 justify-start mb-80`}>
            <Text style={tw`text-gray-700 ml-5`}>Name</Text>
            <Text style={tw`p-3 bg-white text-gray-700 rounded-2xl ml-3 mr-3 mb-3 mt-1`}>U Tun Tun</Text>

            <Text style={tw`text-gray-700 ml-5`}>Phone Number</Text>
            <Text style={tw`p-3 bg-white text-gray-700 rounded-2xl ml-3 mr-3 mb-3 mt-1`}>09423718997</Text>

            <Text style={tw`text-gray-700 ml-5`}>NRC</Text>
            <Text style={tw`p-3 bg-white text-gray-700 rounded-2xl ml-3 mr-3 mb-3 mt-1`}>7/PaMaNa(N)238979</Text>

            <Text style={tw`text-gray-700 ml-5`}>Driver license</Text>
            <Text style={tw`p-3 bg-white text-gray-700 rounded-2xl ml-3 mr-3 mb-3 mt-1`}>3/444389</Text>

            <Text style={tw`text-gray-700 ml-5`}>TukTuk Plate No No</Text>
            <Text style={tw`p-3 bg-white text-gray-700 rounded-2xl ml-3 mr-3 mb-3 mt-1`}>11</Text>
            <View style={tw`flex-row justify-center mt-5`}>
              
              <TouchableOpacity style={tw`font-semibold text-orange-400`} 
              onPress={() => navigation.navigate("Helpcenter")}><Text>Update your profile info</Text></TouchableOpacity>
            </View>
          </View>
        </View>
    )
}