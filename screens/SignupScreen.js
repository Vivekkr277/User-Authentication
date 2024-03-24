import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import signup1 from '../assets/signup1.png'
import  {auth} from '../firebaseConfig/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupScreen({navigation}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    if(email && password) {
      try{
        await createUserWithEmailAndPassword(auth, email, password);
      }catch(error) {
        console.log('got error : ', error);
      }
    }
    
  };
  return (
    <View className="h-full bg-cyan-200	">
      <StatusBar />
      <View className="h-1/3 bg-cyan-200	">
        <View className="ml-3 mt-3">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-circle-outline" size={36} color="gray" />
            </TouchableOpacity>
        </View>

        <View className=" items-center mt-[-22]">
                 <Image source={signup1} style={{height:200, width: 200}}/>
              </View>
           
      </View>

      <View className="h-2/3 bg-white	rounded-t-3xl">


      <View className="ml-8 mt-9">

                     <Text className="text-black text-lg">Full Name</Text>
                    <TextInput
                        className=" bg-gray-200	p-1 text-lg rounded-lg mr-9"
                        placeholder="Username"
                        value={username}
                        onChangeText={value => setUsername(value)}
                        />
                    <Text className="text-black text-lg">Email Address</Text>
                    <TextInput
                        className=" bg-gray-200	p-1 text-lg rounded-lg mr-9"
                        placeholder="Email "
                        value={email}
                        onChangeText={value => setEmail(value)}
                        />
                    <Text className="text-black text-lg">Password</Text>    
                    <TextInput
                        className=" bg-gray-200	p-1 text-lg rounded-lg mr-9	"
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={value => setPassword(value)}
                />
                </View>
            
               
                <View className="justify-center items-center" >
                    <View className="bg-cyan-200 w-4/5  items-center p-2  mt-10 rounded-2xl">
                        <TouchableOpacity onPress={() => handleSignup()}>
                            <Text className="text-2xl font-medium letter tracking-wide">Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="my-2">
                      <Text className="text-lg font-medium" >Or</Text>
                    </View>
                    

                    <View className="flex-row space-x-16 ">
                       <AntDesign name="google" size={32} color="green" />
                        <AntDesign name="facebook-square" size={32} color="blue" />
                        <AntDesign name="instagram" size={32} color="red" />
                    </View>

                    <View className="flex flex-row mt-6 ">
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Text>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>

        {/* <Text>Full Name</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Text>Email Address</Text>
        <TextInput
          placeholder="Email"
          secureTextEntry
          value={email}
          onChangeText={setEmail}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        /> */}
        {/* <Button title="Sign Up" onPress={handleSignup} /> */}
      </View>
    </View>
  );
}