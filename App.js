import { View, Text, Settings } from 'react-native'
import React from 'react'
import Login from './app/Screens/Login'
import Home from './app/Screens/Home.js'
import About from './app/Screens/About'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Setting from './app/Screens/Setting'
import Signup from './app/Screens/Signup'
import Password from './app/Screens/Password'
import BottomTab from './app/Screens/BottomTab'
import Scan from './app/Screens/Scan.js'
import History from './app/Screens/History.js'
import Profile from './app/Screens/Profile.js'


const Stack = createNativeStackNavigator()


const App = () => {
  return (
    <NavigationContainer style={{flex:1}}>
       <Stack.Navigator initialRouteName='MainTab'>
        <Stack.Screen 
                  options={{
             headerShown: true,
            headerTitle: "Login",
            headerStyle: {
              backgroundColor:"#006D5B"
            }
            }}
        
        
        name="Login" component={Login} />    
         <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Setting" component={Setting} />
          



          {/* Buyer Stack */}

           <Stack.Screen 
           
                   options={{
             headerShown: true,
            headerTitle: "Sign Up",
            headerStyle: {
              backgroundColor:"#006D5B"
            }
            }}
            name="Signup" component={Signup} />
            <Stack.Screen 

             options={{
              headerShown: true,
            headerTitle: "Home",
            headerStyle: {
              backgroundColor:"#006D5B"
            }
             }}
            name="MainTab" component={BottomTab} />

             <Stack.Screen 

            options={{
             headerShown: true,
            headerTitle: "Password",
            headerStyle: {
              backgroundColor:"#006D5B"
            }
            }}
            name="Password" component={Password} />
  
                    
                                            

         </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App