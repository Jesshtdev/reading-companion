import React from 'react'
import {
  View, Text, StyleSheet, Image, TextInput,
  ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity
} from 'react-native'
import { Link } from '@react-navigation/native';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.LoginScreen}
      behavior={'padding'}
    >

      <View style={styles.HeaderContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo.png")}
        />
        <Text style={styles.title}>
          Entre Páginas
        </Text>
        <Text>Comparte historias, lecturas y momentos.</Text>
      </View>

      <View style={styles.FormContainer}>
        <View style={styles.formCard}>
          <Text>Inicia sesión</Text>
          <ScrollView>
            
            <TextInput
              style={styles.textinput}
              placeholder='Correo'
              keyboardType='email-address'
            >
            </TextInput>
            <TextInput
              style={styles.textinput}
              placeholder='Contraseña'
              secureTextEntry={true}>
            </TextInput>

            <TouchableOpacity style={styles.touchablebutton}>
              <Link screen={'Home'}>
              <Text style={styles.footerText}>Entrar</Text>
              </Link>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      <View style={styles.FooterContainer}>
        <Text style={styles.footerText}>
          ¿No tienes cuenta?
        </Text>
        <TouchableOpacity>
          <Link screen={'Register'}>
            <Text style={styles.footerText}>
              Registrate
            </Text>
          </Link>
        </TouchableOpacity>   
      </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  LoginScreen: {
    flex: 1,
    backgroundColor: '#033e91b2'
  },
  HeaderContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,

  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: -30
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  FormContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  formCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
  },
  FooterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerText: {
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 5
  },

  textinput: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15
  },

  touchablebutton:
  {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#033e91b2',
    padding: 10,
    borderRadius: 15
  }

});