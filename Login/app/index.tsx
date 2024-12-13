import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';


const LogoPlaceHolder = require("../assets/images/icon.png");

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={LogoPlaceHolder} style={styles.logo} />

      {/* Get Started Button */}
      <Pressable style={styles.button} onPress={() => alert('Button Pressed!')}>
      <Link href="/create-account" style={styles.buttonText}>
        Get Started
      </Link>
      </Pressable>

      {/* Go to Login Link */}
      <Link href={'/login'} style={styles.linkText}>
        Login to Your Account
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',
    paddingHorizontal: 20, // Padding for the container
    backgroundColor: '#fff',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 50, // Adds space between logo and button
  },
  button: {
    backgroundColor: 'turquoise', // Green color for the button
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 35,
    marginBottom: 30, // Space between button and link
    shadowColor: '#000', // Shadow for the button
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    fontSize: 18,
    color: '#007BFF', // Blue color for the link
    textDecorationLine: 'underline',
  },
});
