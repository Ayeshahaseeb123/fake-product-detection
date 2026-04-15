import { View ,Text,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'

const Password = ({navigation}) => {
  return (
           <View style={{
              flex: 1,
              justifyContent:"center",

           }}>


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

              < TouchableOpacity 
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
                  Send Reset Link
                </Text>
              </TouchableOpacity>
           </View>

  )
}

export default Password