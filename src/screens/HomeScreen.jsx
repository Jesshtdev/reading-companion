import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function HomeScreen() {
  const hasActiveBook = true;

  return (
    <View style={styles.HomeScreen}>
      <View style={styles.HeaderContainer}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>¡Hola, user! ✌️</Text>
            <Text style={styles.subtitle}>
              {hasActiveBook ? 'Continúa tu aventura' : '¿Qué historia leeremos hoy?'}
            </Text>
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
              {/* Lectura actual */}
              <Text style={styles.textTitle}>Tu lectura actual</Text>

              <View style={styles.card}>
                <View style={styles.bookContent}>
                  <View style={styles.bookCoverSection}>
                    <Image
                      style={styles.imageBookCover}
                      source={require("../../assets/L001.jpg")}
                    />
                  </View>

                  <View style={styles.bookInfoSection}>
                    <Text style={styles.textNameBook}>El principito</Text>
                    <Text style={styles.textAutor}>Antoine de Saint-Exupéry</Text>

                    <Text style={styles.textReadingProgress}>45% leído</Text>

                    <View style={styles.progressBar}>
                      <View style={styles.progressFill} />
                    </View>

                    <View style={styles.bookStatusSection}>
                      <Ionicons
                        name="calendar-outline"
                        size={20}
                        color="#9b9b9b"
                      />
                      <Text style={styles.textStatusReader}>Última lectura: hoy</Text>
                    </View>
                  </View>
                </View>

                <TouchableOpacity style={styles.ButtonIrA}>
                  <Text style={styles.textContinue}>Continuar leyendo</Text>
                </TouchableOpacity>
              </View>

              {/* Lectura compartida */}

              <Text style={styles.textTitle}>Lectura compartida</Text>

              <View style={styles.card}>
                <View style={styles.friendContent}>
                  <View style={styles.itemIconSection}>
                    <Image
                      style={styles.imageAvatar}
                      source={require("../../assets/Avatar001.png")}
                    />
                  </View>

                  <View style={styles.itemInfoSection}>

                    <Text style={styles.textNameBook}>Emi</Text>

                    <Text style={styles.textReadingProgress}>65% leído</Text>

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


            <View style={[styles.card, styles.emptyStateCard]}>
              <View style={styles.emptyStateContent}>
                <Image
                  style={styles.ImageLibros}
                  source={require("../../assets/sinLibros.png")}
                />

                <Text style={styles.txtTitle}>¿Lista para leer?</Text>

                <Text style={styles.txtSubtitle}>
                  Comienza una nueva aventura junto con tus amigos
                </Text>

                <TouchableOpacity style={styles.ButtonIrA}>
                  <Text style={styles.textButton}>Ir a biblioteca</Text>
                </TouchableOpacity>
              </View>
            </View>

          )}

          <View style={styles.ActivityContainer}>
            <Text style={styles.textTitle}>Actividad reciente</Text>
            <Text style={styles.textViewAll}>Ver todo</Text>
          </View>

          {hasActiveBook ? (
            <View style={styles.card}>
              <View style={styles.activityItem}>
                <View style={styles.itemIconSection}>
                  <View style={styles.IconCardComment}>
                    <Ionicons
                      name="chatbox-ellipses-outline"
                      size={40}
                      color="#7C3AED"
                    />
                  </View>
                </View>

                <View style={styles.itemInfoSection}>
                  <Text style={styles.activityTitle}>Emi comentó</Text>
                  <Text style={styles.activitySubtitle}>Capitulo 15 de El Nombre del Viento</Text>
                  <Text style={styles.activityTime}>Hace 1 hora</Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.activityItem}>
                <View style={styles.itemIconSection}>
                  <View style={styles.IconCardProgress}>
                    <Ionicons
                      name="reader-outline"
                      size={40}
                      color="#16A34A"
                    />
                  </View>

                </View>

                <View style={styles.itemInfoSection}>
                  <Text style={styles.activityTitle}>Emi avanzo</Text>
                  <Text style={styles.activitySubtitle}>5% más en su lectura</Text>
                  <Text style={styles.activityTime}>Ayer</Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.activityItem}>
                <View style={styles.itemIconSection}>
                  <View style={styles.IconCardFinishedBook}>
                    <Ionicons
                      name="book-outline"
                      size={40}
                      color="#033F91"
                    />
                  </View>

                </View>

                <View style={styles.itemInfoSection}>
                  <Text style={styles.activityTitle}>Terminaste el capítulo 10</Text>
                  <Text style={styles.activitySubtitle}>El Nombre del viento</Text>
                  <Text style={styles.activityTime}>Hace 2 días</Text>
                </View>
              </View>


            </View>
          ) : (
            <View style={styles.card}>
              <View style={styles.activityItem}>
                <View style={styles.itemIconSection}>
                  <Image
                    style={styles.imageAvatar}
                    source={require("../../assets/Avatar001.png")}
                  />
                </View>

                <View style={styles.itemInfoSection}>
                  <Text style={styles.activityTitle}>Emi agregó un libro</Text>
                  <Text style={styles.activityTime}>Hace 2 horas</Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.activityItem}>
                <View style={styles.itemIconSection}>
                  <View style={styles.IconCardComment}>
                    <Ionicons
                      name="chatbox-ellipses-outline"
                      size={40}
                      color="#7C3AED"
                    />
                  </View>

                </View>

                <View style={styles.itemInfoSection}>
                  <Text style={styles.activityTitle}>Nuevo comentario</Text>
                  <Text style={styles.activitySubtitle}>Capitulo 12 de Divergente</Text>
                  <Text style={styles.activityTime}>Ayer</Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.activityItem}>
                <View style={styles.itemIconSection}>
                  <View style={styles.IconCardProgress}>
                    <Ionicons
                      name="checkmark-circle-outline"
                      size={40}
                      color="#16A34A"
                    />
                  </View>

                </View>

                <View style={styles.itemInfoSection}>
                  <Text style={styles.activityTitle}>Completaste un libro</Text>
                  <Text style={styles.activitySubtitle}>Bajo la misma estrella</Text>
                  <Text style={styles.activityTime}>Hace 3 días</Text>
                </View>
              </View>


            </View>
          )}


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
    marginBottom: 20,
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

  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  emptyStateContent: {
    alignItems: 'center',
  },

  ImageLibros: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },

  txtTitle: {
    color: '#010e20',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
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
    fontSize: 18,
  },

  textContinue: {
    color: '#FFFFFF',
    fontSize: 15,
  },

  textTitle: {
    marginBottom: 10,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#1F2937',
  },

  imageBookCover: {
    width: 110,
    height: 160,
    borderRadius: 8,
  },

  bookContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  bookCoverSection: {
    marginRight: 18,
  },

  bookInfoSection: {
    flex: 1,
    flexShrink: 1,
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

  friendContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemIconSection: {
    marginRight: 18,
  },

  imageAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  itemInfoSection: {
    flex: 1,
  },

  friendStatus: {
    marginTop: 8,
    color: '#6B7280',
    fontSize: 13,
  },

  ActivityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  textViewAll: {
    color: '#033F91',
    fontSize: 14,
    fontWeight: 'bold',
  },

  activityItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },

  activityTime: {
    fontSize: 14,
    color: '#6B7280',
  },

  emptyStateCard: {
    marginTop: 15,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 15,
  },

  IconCardComment: {
    backgroundColor: '#EDE9FE',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60
  },

  IconCardProgress: {
    backgroundColor: '#DCFCE7',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60
  },

   IconCardFinishedBook: {
    backgroundColor: '#DBEAFE',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60
  },
});

{/* Hay forma de esto

Libro agregado
Fondo icono: #DBEAFE
Icono/texto: #033F91

Comentario
Fondo icono: #EDE9FE
Icono/texto: #7C3AED

Progreso / avanzó
Fondo icono: #DCFCE7
Icono/texto: #16A34A

Capítulo terminado
Fondo icono: #E0F2FE
Icono/texto: #0284C7

Libro terminado
Fondo icono: #FEF3C7
Icono/texto: #D97706

Reacción
Fondo icono: #FCE7F3
Icono/texto: #DB2777

Comentario
Fondo icono: #EDE9FE
Icono/texto: #7C3AED

Progreso / avanzó
Fondo icono: #DCFCE7
Icono/texto: #16A34A

Capítulo terminado
Fondo icono: #E0F2FE
Icono/texto: #0284C7

Libro terminado
Fondo icono: #FEF3C7
Icono/texto: #D97706

Reacción
Fondo icono: #FCE7F3
Icono/texto: #DB2777

Generarlo sin tener que hacer  esto para C/u

 IconCardComment: {
    backgroundColor: '#EDE9FE',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60
  }
  
  const activityType = 'COMMENT';

  const activityColors = {
  COMMENT: {
    icono: chatbubble-outline
    background: '#EDE9FE',
    icon: '#7C3AED',
  },
  PROGRESS: {
   icono: trending-up-outline
    background: '#DCFCE7',
    icon: '#16A34A',
  },
  CHAPTER_FINISHED: {
    background: '#E0F2FE',
    icon: '#0284C7',
  },
  BOOK_FINISHED: {
    background: '#FEF3C7',
    icon: '#D97706',
  },
  REACTION: {
    background: '#FCE7F3',
    icon: '#DB2777',
  },
};

<View
  style={[
    styles.iconCard,
    { backgroundColor: activityColors[activityType].background }
  ]}
>

<Ionicons
 activityConfig[type].icon
  size={28}
  color={activityColors[activityType].icon}
/>
*/}