import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Stack } from 'expo-router';
import React from 'react';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          This screen doesn't exist.
        </Text>
        <Link
          href="/"
          style={{
            marginTop: 10,
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              color: 'blue',
              fontSize: 16,
            }}
          >
            Go to home screen!
          </Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
