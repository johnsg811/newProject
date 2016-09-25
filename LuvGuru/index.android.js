/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class LuvGuru extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Emilia's Profile</Text>
         <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{uri: 'http://cdn1.ouchpress.com/media/celebrities/272/emilia-clarke-10104.jpg'}}
            />
            <View>
                <Text style={styles.textLeft}>29</Text>
                <Text style={{textAlign: 'center', top:10, fontWeight: 'bold'}}>Emilia</Text>
            </View>

         </View>

        <View>
           <Text style={styles.subTextTitle}>About Emilia</Text>
           <Text style={styles.subTextContent}>Hi, I'm an actress and a khaleesi </Text>
           <Text style={styles.subTextTitle}>Vouch for Emilia</Text>
           <Text style={styles.subTextContent}>Say something about Emilia</Text>
           <Text style={styles.subTextTitle}>Community's Work</Text>
           <Text style={styles.subTextContent}>@john Amazing Person!</Text>
           <Text style={styles.subTextContent}>@jack Loves Mountain Biking</Text>
           <Text style={styles.subTextContent}>@jones avid advanture</Text>
        </View>
        <Text style={styles.textRight}>..more</Text>

      </View>

    );
  }
}

var user = { name: 'Emilia', age: 29, Gender: 'Female' }


const styles = StyleSheet.create({
    container: {
    flex: 1
  },
  heading:{
    fontSize: 15,
    textAlign: 'center',
    paddingTop:0.1,
    height: 30
  },
  card: {
    borderWidth: 0.1,
    borderRadius: 0.1,
    borderColor: '#D5D5D5',
    width: 410,
    height: 300,
    padding: 0.1,
    backgroundColor: '#EBE9E9',
  },
  cardImage: {
    height: 260,
  },
  hrStyle: {
    top:10
  },
  textLeft: {
    position: 'absolute',
    left:5,
    top:10
  },
  textRight: {
    paddingTop:50,
    right:5,
    textAlign: 'right'
  },
  subTextTitle: {
    color: 'red',
    fontSize: 10,
    left:15,
    paddingTop:10
  },
  subTextContent: {
    color: 'black',
    fontSize: 15,
    left:15,
    right:25,
    paddingTop:10,
    fontWeight: 'normal'
  }
});

AppRegistry.registerComponent('LuvGuru', () => LuvGuru);
