import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Link } from '@react-navigation/native';


export default function HomeScreen() {
  return (
    <View style={styles.HomeScreen}>
      <View style={styles.HeaderContainer}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>¡Hola, user! ✌️</Text>
            <Text style={styles.subtitle}>¿Qué historia leeremos hoy?</Text>
          </View>

          <Ionicons
            name="notifications-outline"
            size={24}
            color="#FFFFFF"
          />
        </View>

        <View style={styles.Searchbar}>
          <Ionicons
            name="search-outline"
            size={22}
            color="#6B7280"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Buscar libros, autores o géneros"
            placeholderTextColor="#6B7280"
          />
        </View>
      </View>


      <View style={styles.BodyContainer}>
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <View style={styles.contentCard}>
            <Image
              style={styles.ImageLibros}
              source={require("../../assets/sinLibros.png")}
            />
            <Text style={styles.txtTitle}>¿Listo para leer?</Text>
            <Text style={styles.txtSubtitle}>Comienza una nueva aventura junto con tus amigos</Text>


            <TouchableOpacity style={styles.ButtonIrA}>
              <Text style={styles.textButton}>Ir a biblioteca</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.ActivityContainer}>
            <Text>Actividad reciente</Text>
            <Text>Ver todo</Text>
          </View>

          <View style={styles.contentCard}>
            
          </View>
        </ScrollView>
      </View>





    </View>

  )
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    backgroundColor: '#e7e7e7f1',
  },

  HeaderContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#033F91',
    paddingTop: 50,
    paddingHorizontal: 15,
    paddingBottom: 18,
    justifyContent: 'flex-start',
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#E5E7EB',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 20
  },

  Searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 46,
  },

  textInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#1F2937',
  },

  BodyContainer: {
    flex: 4,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  contentCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15
  },

  ImageLibros: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },

  txtTitle: {
    color: '#010e20',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20
  },

  txtSubtitle: {
    color: '#6B7280',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
  },

  ButtonIrA: {
    width: '100%',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#033F91',
    paddingVertical: 12,
    borderRadius: 12,
  },

  textButton: {
    color: '#FFFFFF',
    fontSize: 18
  },

  ActivityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  }


});