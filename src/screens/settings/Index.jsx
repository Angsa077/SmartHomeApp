import {
  SafeAreaView,
  View, 
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

// import hook useState and useEffect
import React, {useState, useEffect} from 'react';

// import async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingScreen() {
  // init state
  const [IpServer, setIpServer] = useState('');

  // get data from async storage
  const getIpServer = async () => {
    try {
      const value = await AsyncStorage.getItem('IpServer');
      if (value !== null) {
        // value previously stored
        setIpServer(value);
      }
    } catch (e) {
      // error reading value  
    }
  };

  useEffect(() => {
    getIpServer();
  }, []);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('IpServer', IpServer);
      ToastAndroid.show('Data Berhasil Disimpan !', ToastAndroid.SHORT);
    } catch (e) {
      // saving error
    }
  };

  return (
    <SafeAreaView>
        <ScrollView style={{ padding:15 }}>
            <View style={styles.container}>
                <Text style={styles.textInput}>IP Web Server</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setIpServer}
                  value={IpServer}
                />
                <View style={styles.containerButton}>
                  <TouchableOpacity onPress={() => storeData()}>
                      <Text style={styles.buttonText}>SIMPAN</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },

  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 20,
    color: '#000',
    backgroundColor: '#fff',
  },
    containerButton: {
      width: '95%',
      height: 40,
      backgroundColor: '#405ff3',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      marginLeft: 10,
      marginRight: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
  },
});
