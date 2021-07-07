import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const IMG_URI =
  'https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg';

const ProfileHead = () => {
  return (
  <View style={styles.screen}>
    <Image style={styles.image} source={{uri: IMG_URI}} />
    <Text style={styles.nameText}>
      Sara Alotaibi
    </Text>
    <Text style={styles.bankText}>
    Alrajhi Bank
    </Text>
  </ View>
  );
};

const styles = StyleSheet.create({
  screen: {
      alignItems: 'center',
      marginVertical:30,
     // flex:1,
    //  top: 20,
    },
    // styling the image
    image: {
      width: 125,
      height: 125,
      borderRadius: 1000, //// a very high number like 500, 1000, 10000
    },
  nameText: {
    fontWeight: 'bold',
    color: 'black',
   // top: 20,
   marginVertical: 5,
   marginTop: 5,
   fontSize: 20,
  },
  bankText: {
  fontSize: 15,
  //top: 25,
  color: 'grey',
  }
});

export default ProfileHead;