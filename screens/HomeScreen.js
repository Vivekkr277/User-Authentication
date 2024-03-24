import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig/firebase'
import home_image from '../assets/home_image.png'

export default function HomeScreen() {

 const handleLogout = async () => {
  await signOut(auth)
 }

  return (
    <View className="flex-1 justify-center items-center"> 
     <View className="mt-[-180] mb-20">
       <Image source={home_image} style={{height: 200, width:200}}/>
     </View>
      <Text className="text-2xl font-bold"> Welcome to HomeScreen</Text>
      <View className="bg-cyan-200 w-4/5  items-center p-2  mt-20  rounded-2xl">
        <TouchableOpacity onPress={() => handleLogout()}>
          <Text className="text-2xl font-medium letter tracking-wide" >Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}