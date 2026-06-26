import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function LibraryScreen() {
  return (
    <View style={styles.LibraryScreen}>
      <View style={styles.HeaderContainer}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Biblioteca</Text>
            <Text style={styles.subtitle}>
              Tus lecturas compartidas y personales
            </Text>
          </View>
          <View style={styles.IconContainer}>
            <Ionicons
              name="add-outline"
              size={24}
              color="#FFFFFF"
            />
          </View>
        </View>
      </View>

      <View style={styles.BodyContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent} >
          <View style={styles.card}>
            <View style={styles.contentStatus}>
              <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}>
                <View style={[styles.contentStatusItems, styles.contentStatusItemActive]}>
                  <Text style={[styles.contentStatusText, styles.contentStatusTextActive]}>Todos</Text>
                </View>
                <View style={styles.contentStatusItems}>
                  <Text style={styles.contentStatusText}>Leyendo</Text>
                </View>
                <View style={styles.contentStatusItems}>
                  <Text style={styles.contentStatusText}>Completados</Text>
                </View>
                <View style={styles.contentStatusItems}>
                  <Text style={styles.contentStatusText}>Pausados</Text>
                </View>
              </ScrollView>
            </View>

            <View style={styles.cardBook}>

              <View style={styles.ContentBook}>
                <View style={styles.contentBookImage}>
                  <Image
                    style={styles.ImageLibros}
                    source={require("../../assets/L001.jpg")}
                  />

                </View>
                <View style={styles.contentBookInfo}>
                  <View style={styles.contentTitle}>

                    <Text style={styles.textNameBook}>Titulo</Text>
                    <Ionicons name="ellipsis-horizontal" size={22} color="#6B7280" />
                  </View>
                  <Text style={styles.textAutor}>Autor</Text>
                  <View style={styles.bookBadges}>
                    <View style={styles.badgeShared}>
                      <Text style={styles.badgeSharedText}>Compartido</Text>
                    </View>

                    <View style={styles.badgeReading}>
                      <Text style={styles.badgeReadingText}>Leyendo</Text>
                    </View>
                  </View>
                  <Text style={styles.textReadingProgress}>45%</Text>
                  <View style={styles.progressBar}>
                    <View style={styles.progressFill} />
                  </View>
                </View>

              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  LibraryScreen: {
    flex: 1,
    backgroundColor: '#e7e7e7f1',
  },

  HeaderContainer: {
    flex: 0,
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
    marginBottom: 20,
  },

  BodyContainer: {
    flex: 4,
    width: '100%',
  },

  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },

  IconContainer: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: '100%',
    backgroundColor: '#f3f2f2',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  contentStatus: {
    flexDirection: 'row',
    gap: 10
  },

  contentStatusItems: {
    backgroundColor: '#e9e9e9',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  contentStatusItemActive: {
    backgroundColor: '#033F91'
  },

  contentStatusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000'
  },

  scrollContainer: {
    alignItems: 'center',
    gap: 4
  },

  cardBook: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
    marginTop: 15
  },

  ContentBook: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },


  ImageLibros: {
    width: 90,
    height: 130,
    borderRadius: 8,
    resizeMode: 'cover',

  },

  contentBookImage: {
    marginRight: 16,
  },

  contentBookInfo: {
    flex: 1,
    flexShrink: 1,
  },

  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: '#033F91',
    marginBottom: 8,
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
  contentStatusTextActive: {
    color: '#FFFFFF',
  },

  bookBadges: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },

  badgeShared: {
    borderWidth: 1,
    borderColor: '#93C5FD',
    backgroundColor: '#DBEAFE',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  badgeSharedText: {
    color: '#033F91',
    fontSize: 12,
    fontWeight: 'bold',
  },

  badgeReading: {
    borderWidth: 1,
    borderColor: '#86EFAC',
    backgroundColor: '#DCFCE7',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  badgeReadingText: {
    color: '#15803D',
    fontSize: 12,
    fontWeight: 'bold',
  },

});


/* {/*
  Compartido
Fondo: #DBEAFE
Texto: #033F91
Borde: #93C5FD

Leyendo
Fondo: #DCFCE7
Texto: #15803D
Borde: #86EFAC

Completado
Fondo: #E0F2FE
Texto: #0284C7
Borde: #7DD3FC

Pausado
Fondo: #FEF3C7
Texto: #D97706
Borde: #FCD34D */