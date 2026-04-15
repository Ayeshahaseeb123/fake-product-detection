

import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather';


const About = () => {
  return (
    <View>
      <Text style={{ color: 'purple', fontSize: 50, alignSelf: 'center' }}>About</Text>

      <Feather style={{ alignSelf: 'center' }} name="settings" size={54} color="orange" />


    </View>
  )
}

export default About