

import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import Feather from '@expo/vector-icons/Feather';


const Home = () => {

  let Products = [

  {
    name: "Iphone",
    price: 1000,
    
  },
  {
    name: "samsung",
    price: 100,
    
  },

];
  return (
    
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}>
      <View style={{
        flex: 1, // flex1 full screen 
        backgroundColor: "white"
      }}>

        <View style={{
          flex: 1, height: 60, width: "100%",
          margin: 20, marginHorizontal: 20
        }}>

          {/* top header */}
          <View style={{
            height: 60,
            width: "100%",
            flexDirection: 'row' // used to align items in row
          }}> 


            {/* {"first child"} */}
            <View style={{
              flex: 3,
            }}>
              <Text style={{
                fontSize: 25,
                fontWeight: "bold"
              }}>
                BSCS 7
              </Text>
              <Text style={{
                fontSize: 18,
                color: "black",
                fontWeight: "500"
              }}>
                GM
              </Text>

            </View>



            {/* {"second child"} */}
            <View style={{
              flex: 1,
            }}>

              <Image
                source={require('../../assets/images/icon.png')}
                style={{
                  width: 50, height: 50, borderRadius: 25,
                  alignSelf: 'flex-end', //flex end used to align item on right 
                  margin: 'auto',
                }}
              />


            </View>

          </View>


          {/* search */}


          <View style={{
            height: 60, marginTop: '2%',
            width: "100%",
            flexDirection: 'row' // used to align items in row
          }}>


            {/* first child search bar */}
            <View style={{
              flex: 3,
            }}>


              <TextInput style={{
                width: "100%", height: 40,

                paddingLeft: 10,

                borderWidth: 2,
                borderRadius: 10,
                borderColor: 'grey'

              }}
                placeholder='Search'
              />


            </View>

            {/* second child icon */}

            <View style={{
              flex: 1, alignSelf: 'center'
            }}>


              <Feather style={{ margin: 'auto', alignSelf: 'flex-end' }}
                name="search" size={30} color="black" />

            </View>

          </View>

        </View>

        {
          //1st(items) represents the elements of an array, while the 2nd(index) is used for the index number 

          Products.map((items, index) => (

            <View key={index}>
              <Text style={{ fontSize: 40 }}>{ index}</Text>
              <Text style={{ fontSize: 40 }}>{ items.name}</Text>

            </View>
          ) 


          )
        }






      </View>


    </ScrollView>

  )
}

export default Home