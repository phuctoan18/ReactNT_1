import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

import { Link } from '@react-navigation/native';


export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <Text style={styles.text}>Your email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <Text style={styles.text}>Your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Sign in" />
        </View>
        <Link to={{ screen: 'SignUp', params: {} }} style={{
          marginTop: '10%', 
          fontSize: 16,
          textDecorationLine: 'underline',
        }}>
          Forgot your password?
        </Link>
      </View >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    fontSize: 16,
    width: '100%',
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#f4511e',
  },

  button: {
  },

  text: {
    opacity: 0.5,
    alignSelf: 'flex-start',
    marginBottom: '5%',
  },

  buttonContainer: {
    marginTop: '10%',
    width: 120,
    height: 40
  }

});
