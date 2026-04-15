import React from 'react';
import {View,Text,TextInput,TouchableOpacity, StyleSheet} from 'react-native';
// import Imagebg from '../Screens/Imagebg.js';
const Login = ({ navigation }) => {
  return (
      <View style={styles.overlay}>

        <Text style={styles.title}>Welcome Back</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          placeholderTextColor="#555"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor="#555"
          secureTextEntry
        />

        {/* Forgot Password */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Password')}
        >
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

     
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Go to Home (extra from 2nd file) */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>

        {/* Signup */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.signup}>
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>

      </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.85)', // light overlay for readability
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#006D5B"
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderColor: "#006D5B",
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 15,
    backgroundColor: "#fff"
  },

  forgot: {
    textAlign: "right",
    marginTop: 10,
    color: "#006D5B",
    fontWeight: "500"
  },

  button: {
    backgroundColor: '#006D5B',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: "bold"
  },

  signup: {
    textAlign: "center",
    marginTop: 20,
    color: "#000",
    fontSize: 16
  }
});