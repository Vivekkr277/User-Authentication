import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import login_image from '../assets/login_image.png'
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TextInput, Image, StatusBar, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebaseConfig/firebase'

export default function LoginScreen ({navigation}) {

    const[err, setErr] = useState('');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
  
    const handleLogin = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('home');
        }catch(error){
            setErr(error);
            console.log('got error : ', error);
        }
        
    };
    return(

        <View className=" flex h-full bg-cyan-200	" >
        <StatusBar/>

            <View className="h-1/3 bg-cyan-200	">
              <View className="ml-3 mt-3">
                <TouchableOpacity onPress={() => navigation.navigate('welcome')}>
                <Ionicons name="chevron-back-circle-outline" size={36} color="gray" />
                </TouchableOpacity>
              </View>

              <View className=" items-center mt-[-22]">
                 <Image source={login_image} style={{height:200, width: 200}}/>
              </View>
            
            </View>

            <View className="h-2/3 bg-white	rounded-t-3xl">

                <View className="ml-8 mt-9">
                    {
                       err !== '' && <Text className="text-red-600">email or password is wrong</Text>
                    }
                    <Text className="text-black text-lg">Email Address</Text>
                    <TextInput
                        className=" bg-gray-200	p-1 text-lg rounded-lg mr-9"
                        placeholder="Email"
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
            
               

                <View className="items-end mr-9">
                    <TouchableOpacity>
                        <Text>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                
                 <View className="justify-center items-center" >
                    <View className="bg-cyan-200 w-4/5  items-center p-2  mt-28 rounded-2xl">
                        <TouchableOpacity onPress={() => handleLogin()}>
                            <Text className="text-2xl font-medium letter tracking-wide">Log In</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <View className="my-2">
                      <Text className="text-lg font-medium" >Or</Text>
                    </View>
                    

                    <View className="flex-row space-x-16 ">
                       <AntDesign name="google" size={32} color="green" />
                        <AntDesign name="facebook-square" size={32} color="blue" />
                        <AntDesign name="instagram" size={32} color="red" />
                    </View> */}

                    <View className="flex flex-row mt-3 ">
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                            <Text>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
         
        </View>

  
    )
}