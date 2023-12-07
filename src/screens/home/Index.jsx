import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image, 
  StyleSheet
} from 'react-native';

import React from 'react';

export default function HomeScreen({navigation: {navigate}}) {
  return (
    <ImageBackground
      source={require('../../assets/images/bg-3.jpg')}
      style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Image 
              source={require('../../assets/images/smart-house.png')}
              style={{ width: 60, height:60 }}
          />
          <Text style={styles.text}>SMART HOME</Text>
          <Text style={styles.textSmall}>
              Kontrol dan Monitoring Perangkat di Rumah Anda Dengan Mudah dan Cepat
          </Text>
          <View style={styles.containerFooter}>
            <TouchableOpacity
                onPress={() => {
                  navigate('Lamp')
                }}>
              <Text style={styles.textButton}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },

  textSmall: {
    marginTop: 10,
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },

  containerFooter: {
    width: '90%',
    height: 50,
    backgroundColor: '#405ff3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 180,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  textButton: {
    color: '#fff',
    fontSize: 18,
  },
});