import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';

// import hook
import React, { useState, useEffect } from 'react';

// import async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// import axios
import axios from 'axios';

// import switch
import { Switch } from 'react-native-switch';

export default function LampScreen() {
  // init state lamps
  const [lamps, setLamps] = useState([]);

  const getLamps = async () => {
    try {
      const ipServer = await AsyncStorage.getItem('IpServer');
      if (ipServer !== null) {
        // get status lampu from server
        await axios.get(`${ipServer}/api/lamps`).then(response => {
          // set data lampu
          setLamps(response.data.data);
        });
      }
    } catch (e) {
      // error reading value
      console.log(e)
    }
  };

  // hook useEffect
  useEffect(() => {
    // call function getLamps
    getLamps();
  }, []);

  const toggleSwitch = async id => {
    // update to database
    try {
      // get ip server from async storage
      const ipServer = await AsyncStorage.getItem('IpServer');
      if (ipServer !== null) {
        // get status lampu from server
        await axios.post(`${ipServer}/api/lamps/${id}`).then(response => {
          // call function getLamps
          getLamps();
          ToastAndroid.show(`${response.data.message}`, ToastAndroid.SHORT);
        });
      }
    } catch (e) {
      // error reading value
      console.log(e)
    }
  }

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 15 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <FlatList
            style={{ flex: 1, marginTop: 10, marginBottom: 260 }}
            data={lamps}
            renderItem={({ item, index, separators }) => (
              <TouchableOpacity style={styles.container} onPress={() => { }}>
                {item.status === 1 && (
                  <Image
                    source={require('../../assets/images/on.png')}
                    style={{
                      width: '25%',
                      aspectRatio: 5 / 5,
                      borderRadius: 5,
                      marginRight: 15,
                      padding: 50,
                      backgroundColor: '#A5D6A7',
                    }}
                  />
                )}
                {item.status === 0 && (
                  <Image
                    source={require('../../assets/images/off.png')}
                    style={{
                      width: '25%',
                      aspectRatio: 5 / 5,
                      borderRadius: 5,
                      marginRight: 15,
                      padding: 50,
                      backgroundColor: '#EEEEEE',
                    }}
                  />
                )}
                <View style={styles.block}>
                  <Text
                    style={{
                      color: '#333333',
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginTop: 10,
                    }}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      marginTop: 10,
                      height: 1,
                      backgroundColor: '$ddd',
                      alignSelf: 'stretch'
                    }}></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 15,
                      marginLeft: 10,
                    }}>
                      <Switch 
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={item.status ? '#f55d4b' : '#f4f3f4'}
                        onValueChange={toggleSwitch.bind(null, item.id)}
                        value={item.status === 1 ? true : false}
                      />
                    </View>
                </View>
              </TouchableOpacity>
            )}
            eyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },

  labelIcon: {
    marginRight: 5,
    color: '#333333',
  },

  labelText: {
    color: '#333333',
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
  },

  container: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 7,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },

  image: {
    width: '35%',
    aspectRatio: 5 / 5,
    marginRight: 8,
  },

  block: {
    padding: 0,
    width: '65%',
  },
});
