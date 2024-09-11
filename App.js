import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [popUp, setPopUp] = useState('')
 
  const buttonClicked = () => {
    setPopUp('Login Successfully');
  };

  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
    <View style={styles.portcontain}>
      <Text style={styles.titleText}>Log In</Text>
      </View>

    <View style={styles.login}>
      <Text style={styles.infoText}>Username</Text>
      <TextInput placeholder="Username" style={styles.inputText}></TextInput>
      <Text style={styles.infoText}>Password</Text>
      <TextInput placeholder="Password" style={styles.inputText} secureTextEntry></TextInput>
    </View>
    <TouchableOpacity style={styles.loginButton} onPress={buttonClicked}>
    <Text style={styles.loginButtonText}>Log In</Text>
    </TouchableOpacity>
    
    <View style={styles.popUpContainer}>      
      {popUp ? <Text style={styles.popUpText}>{popUp}</Text> : null}    
    </View>


    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',  
    textAlign: 'center',
    marginVertical: 30
  },
  infoText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'start',
    marginVertical: 20
  },
  login:{
    justifyContent: 'center',
    marginVertical: 50
  },
  inputText: {
    fontSize: 25,
    textAlign: 'center',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  popUpContainer: {
    backgroundColor: 'skyblue',
    padding: 14,
    marginTop: 40,
    borderRadius: '100%'
  },
  popUpText:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
