


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import About from './About';
import Home from './Home';
import Setting from './Setting';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import Scan from './Scan';
import History from './History';
import Profile from './Profile';



const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <View style={{flex:1}}>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen
         
         options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => ( //
            <Feather name="home" size={24} color="black" />
          ),
        }}
          
          name="Home" component={Home} /> 
        

        {/* name="Home" initialroute name ko btny k liye hota */}

        <Tab.Screen
          
          
          options={{
          title: 'Scan',
          tabBarIcon: ({ color, size, focused }) => ( //
          <Ionicons name="scan" size={24} color="black" />
          ),
        }}
          
          name="Scan" component={ Scan} />

       
        

{/* component main wo aye ga jn c screen open hogi */}
        
        <Tab.Screen
          
           options={{
          title: 'Setting',
          tabBarIcon: ({ color, size, focused }) => ( //
          <Feather name="settings" size={24} color="black" />
          ),
        }}
         name="Setting" component={Setting} />


        <Tab.Screen

          options={{
          title: 'History',
          tabBarIcon: ({ color, size, focused }) => ( //
          <MaterialIcons name="manage-history" size={24} color="black" />
          ),
        }}
         name="History" component={History} />

         <Tab.Screen
          
           options={{
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => ( //
           
            <EvilIcons name="user" size={24} color="black" />
          ),
        }}
         name="Profile" component={Profile}
         />
      </Tab.Navigator>
    </View>
  )
}

export default BottomTab