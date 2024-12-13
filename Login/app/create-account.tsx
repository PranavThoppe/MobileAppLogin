import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Just a simple check for this demo
    if (username === 'user' && password === 'password') {
      Alert.alert('Login Successful', 'Welcome!');
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account!</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="black"
        value={username}
        onChangeText={setUsername}
        autoCapitalize= 'none'
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize= 'none'
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="black"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize= 'none'
      />

        


      {/* Login Button */}
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: 'turquoise',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signUpText: {
    marginTop: 20,
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  linkText: {
    fontSize: 18,
    color: '#007BFF', // Blue color for the link
    textDecorationLine: 'underline',
  },
});
