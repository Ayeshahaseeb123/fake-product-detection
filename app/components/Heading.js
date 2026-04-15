import { View, Text } from 'react-native'
import React from 'react'

const Heading = (props) => {
    // console.log(props);

    return (
        <View>
            <Text style={{fontSize:props.size,color:props.textColor , textAlign:"center", padding:20}}>
                {props.title}
            </Text>
        </View>
    )
}

export default Heading