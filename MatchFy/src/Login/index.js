import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// import api from '../Services/api';   
 
const Login = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#a459b3' }}>

<Image style={{width: 300, height: 300, alignSelf: "center", top: -100}}    //logo
          source={require('../Images/matchfy.png')}  resizeMode="contain"
        />
 

<TouchableOpacity //botao
          style={{  //estilização CSS, talvez seja interessante colocar em um arquivo separado no futuro
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft:60,
            paddingRight:60,  
            borderRadius: 5,
            backgroundColor: '#3b91cf',
            alignSelf: 'center',
            margin: 15,
            marginHorizontal: 20
            
        }}
         onPress={() => navigation.navigate('Coords')} //comando pra levar pra proxima tela
       >
         <Text style={{   // texto do botao
           fontWeight: 'bold',
           color: '#FFF', 
            fontSize: 16,
            textAlign: 'center',
            }}> 
            Entrar com Facebook </Text>
       </TouchableOpacity>
     
   </View> 
);
 
Login.navigationOptions = {
  title: 'Login',
  header: null, 
}



export default Login; 