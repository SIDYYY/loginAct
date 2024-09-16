import React, { useState,useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Animated } from 'react-native';

export default function App() {
  const [popUp, setPopUp] = useState('')

  const slideAnimTop = useRef(new Animated.Value(-300)).current;
  const FadeAnim = useRef(new Animated.Value(0)).current;

  const buttonClicked = () => {
    setPopUp('Login Successfully');
  };

  useEffect(() => {
    Animated.timing(slideAnimTop, {
      toValue: 0, 
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Animated.timing(FadeAnim, {
      toValue: 1, 
      duration: 350,
      useNativeDriver: true, 
    }).start();
  }, []);


  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.loginContainer}>
    <View style={styles.portcontain}>
      <Animated.Text style={[styles.titleText, {transform: [{translateY: slideAnimTop }] }]}>Log In</Animated.Text>
      </View>

    <View style={styles.login}>
      <Animated.Text style={[styles.infoText, ,  { opacity: FadeAnim }]}>Username</Animated.Text>
      <TextInput placeholder="Username" style={styles.inputText}></TextInput>
      <Animated.Text style={[styles.infoText, , { opacity: FadeAnim }]}>Password</Animated.Text>
      <TextInput placeholder="Password" style={styles.inputText} secureTextEntry></TextInput>
    </View>
    <TouchableOpacity style={styles.loginButton} onPress={buttonClicked}>
    <Text style={styles.loginButtonText}>Log In</Text>
    </TouchableOpacity>
    
    <View style={styles.popUpContainer}>      
      {popUp ? <Text style={styles.popUpText}>{popUp}</Text> : null}    
    </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 30,
    marginVertical: 60
  },
  
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',  
    textAlign: 'center',
    marginTop: 30,
    color: '#ECAE36'
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'start',
    marginVertical: 20
  },
  login:{
    justifyContent: 'center',
    marginVertical: 50
  },
  loginContainer: {
    padding: 30,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#FFFEF5'
  },
  inputText: {
    fontSize: 15,
    textAlign: 'start',
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 13,
    borderRadius: 10
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  popUpContainer: {
    backgroundColor: '#fff',
    padding: 14,
    marginTop: 40,
    borderRadius: 10,
  },
  popUpText:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ECAE36',
    color: '#fff',
    padding: 20,
  }
});
