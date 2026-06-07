import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Link } from '@react-navigation/native';


export default function HomeScreen() {
  const hasActiveBook = true; //En caso de no haber libros activos
  return (
    <View style={styles.HomeScreen}>
      <View style={styles.HeaderContainer}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>¡Hola, user! ✌️</Text>
            {hasActiveBook ?
              (
                <Text style={styles.subtitle}>Continúa tu aventura</Text>
              ) : (
                <Text style={styles.subtitle}>¿Qué historia leeremos hoy?</Text>
              )}

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
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {hasActiveBook ? (
            <>
            { /* Lectura actual*/}
              <Text style={styles.textTitle}>Tu lectura actual</Text>
              <View style={styles.contentCard}>
                <View style={styles.bookContent}>
                  <View style={styles.bookCoverSection}>
                    <Image
                      style={styles.imageBookCover}
                      source={require("../../assets/L001.jpg")}
                    />
                  </View>
                  <View style={styles.bookInfoSection}>
                    <Text style={styles.textNameBook}>El principito</Text>
                    <Text style={styles.textAutor}>Antoine de Saint-Exupéry </Text>

                    <Text style={styles.textReadingProgress}>45% leido</Text>
                    <View style={styles.progressBar}>
                      <View style={styles.progressFill} />
                    </View>

                    <View style={styles.bookStatusSection}>
                      <Ionicons
                        name="calendar-outline"
                        size={20}
                        color="#9b9b9b"
                      />
                      <Text style={styles.textStatusReader}>Ultima lectura: hoy</Text>
                    </View>
                  </View>
                </View>

                <TouchableOpacity style={styles.ButtonIrA}>
                  <Text style={styles.textContinue}>Continuar leyendo</Text>
                </TouchableOpacity>
              </View>

              { /* Lectura compartida*/}
              <Text style={styles.textTitle}>Lectura compartida</Text>
              <View style={styles.contentCard}>
                <View style={styles.friendContent}>

                  <View style={styles.AvatarImagenSection}>
                    <Image
                      style={styles.imageAvatar}
                      source={require("../../assets/Avatar001.png")}
                    />
                  </View>

                  <View style={styles.AvatarInfoSection}>
                    <Text style={styles.textNameBook}>Emi</Text>

                    <Text style={styles.textReadingProgress}>
                      65% leído
                    </Text>

                    <View style={styles.progressBar}>
                      <View style={styles.progressFillFriend} />
                    </View>

                    <Text style={styles.friendStatus}>
                      Va delante de ti 😄
                    </Text>
                  </View>

                </View>
              </View>

            </>
          ) : (
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
          )}

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

  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
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
    width: '100%',
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

  textContinue: {
    color: '#FFFFFF',
    fontSize: 15
  },

  ActivityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },

  imageBookCover: {
    width: 110,
    height: 160,
    borderRadius: 8,
  },

  bookContent: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },

  bookCoverSection: {
    marginRight: 18
  },

  bookInfoSection: {
    flex: 1,
    flexShrink: 1,
  },

  buttonSection: {
    marginTop: 5
  },

  textTitle: {
    marginBottom: 10,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 15
  },

  textNameBook: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },

  textAutor: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 22,
  },

  textReadingProgress: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },

  bookStatusSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  textStatusReader: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 6,
  },

  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
  },

  progressFill: {
    width: '45%',
    height: '100%',
    backgroundColor: '#033F91',
    borderRadius: 10,
  },

  progressFillFriend: {
    width: '65%',
    height: '100%',
    backgroundColor: '#033F91',
    borderRadius: 10,
  },

  imageAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  },

  AvatarInfoSection: {
    flex: 1,
    marginRight: 18
  },

  friendContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});