import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

// import hook
import React, {useState, useEffect} from 'react';

// import barChart
import { BarChart } from 'react-native-chart-kit';

// import dropdown picker
import DropDownPicker from 'react-native-dropdown-picker';

// import async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// import axios
import axios from 'axios';

export default function HistoryScreen() {
  // init dimension
  const screenHeight = Dimensions.get('window').height;
  const screenWeight = Dimensions.get('window').width;

  // init state for dropdown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [items, setItems] = useState([
    {label: '1 Hari', value: 1},
    {label: '3 Hari', value: 3},
    {label: '7 Hari', value: 7}
  ]);

  // state for data chart
  const [labels, setLabels] = useState([]);
  const [total, setTotal] = useState([]);

  const getHistories = async () => {
    try {
      const ipServer = await AsyncStorage.getItem('IpServer');
      if (ipServer !== null) {
        await axios
        .get(`${ipServer}/api/histories?periode=${value}`)
        .then(response => {
          // set data to state
          setLabels(response.data.data.labels);
          setTotal(response.data.data.total);
        });
      }
    } catch (e) {
      // error reading value
      console.log(e)
    }
  };

  // hook useEffect
  useEffect(() => {
    // call function getHistories
    getHistories();
  }, [value]);

  return (
    <SafeAreaView style={{ padding: 15 }}>
      <View 
        style={{ 
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 60,
        }}>
        <View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder='-- Pilih Periode --'
            />
          </View>
          <View style={{ marginBottom: 50 }}></View>
          <View style={{ padding: 20 }}>
            <BarChart 
            data={{ 
              labels: labels,
              datasets: [
                  {
                    data: total
                  },
                ],
              }}
              width={screenWeight / 1.1}  // from react-native
              height={screenHeight / 1.7}
              yAxisInterval={1} // optional, default to 1
              chartConfig={{ 
                  backgroundColor: '#405ff3',
                  backgroundGradientFrom: '#505ff4',
                  backgroundGradientTo: '#205ff3',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
              }}
              bezier
              style={{ 
                marginVertical: 8,
                borderRadius: 16,
              }}
              verticalLabelRotation={30}
            />
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
