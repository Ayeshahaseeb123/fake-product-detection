import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Signup = ({navigation}) => {
  return (
    <View style={{flex:1,
         backgroundColor:"white",
         justifyContent:"center"
       }}>
         <Text style={{textAlign:"center",marginTop:"4%", fontSize:20}}>Welcome</Text>
         <TextInput
       
         style={{
           width: "96%",
           height: 50,
           borderWidth: 1,
           borderColor: "gray",
           marginTop:20,
           alignSelf:'center',
           borderRadius:10,
           paddingLeft:10,
   
         }}
         placeholder='Enter your Email'/>
   
          <TextInput
         style={{
           width: "96%",
           height: 50,
           borderWidth: 1,
           borderColor: "gray",
           marginTop:"6%",
           alignSelf:'center',
           borderRadius:10,
           paddingLeft:10,
   
         }}
         placeholder='Enter your Password'/>
         <TouchableOpacity 
         onPress={()=>navigation.navigate("Home")}
         
         style={{
             width: "96%",
           height: 50,
           borderWidth: 1,
           backgroundColor: "#006D5B",
           marginTop:"6%",
           alignSelf:'center',
           borderRadius:10,
           
   
         }}
         >
           <Text style={{
             textAlign: "center",
             marginTop: "auto",
             marginBottom:"auto",
             color:"white",
             
             fontSize: 18,
             fontWeight:"bold"
           }}>
             Sign Up
           </Text>
         </TouchableOpacity>
   
               <TouchableOpacity 
         onPress={()=>navigation.navigate("Login")}
         
         style={{
             width: "96%",
           height: 50,
           //backgroundColor:"red"
           
            marginTop:"6%",
           alignSelf:'center',
           borderRadius:10,
           
   
         }}
         >
           <Text style={{
             textAlign: "center",
             marginTop: "auto",
             marginBottom:"auto",
             color:"Black",
             fontSize: 18,
             
             //fontWeight:"bold"
           }}>
             already have an account ? Login
           </Text>
         </TouchableOpacity>
         
       </View>
  )
}

export default Signup