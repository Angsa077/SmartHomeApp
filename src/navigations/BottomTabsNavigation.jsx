import { View, Text, Image, StyleSheet } from 'react-native';

// tabs navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// import  screens Home
import HomeScreen from '../screens/home/Index';

// import screens lamps
import LampScreen from '../screens/lamps/Index';

// import screens histories
import HistoriesScreen from '../screens/histories/Index';

// import screens setting
import SettingScreen from '../screens/settings/Index';

export default function ButtomTabsNavigation() {
    return (
        <Tab.Navigator screenOptions={styles.screenOptionsTab}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconCenter}>
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode="contain"
                                style={
                                    focused
                                        ? styles.tabBarIconImageActive
                                        : styles.tabBarIconImage
                                }
                            />
                            <Text
                                style={focused ? styles.tabBarTextActive : styles.tabBarText}>
                                HOME
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Lamp"
                component={LampScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconCenter}>
                            <Image
                                source={require('../assets/icons/light-bulb.png')}
                                resizeMode="contain"
                                style={
                                    focused
                                        ? styles.tabBarIconImageActive
                                        : styles.tabBarIconImage
                                }
                            />
                            <Text
                                style={focused ? styles.tabBarTextActive : styles.tabBarText}>
                                LAMPU
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Histories"
                component={HistoriesScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconCenter}>
                            <Image
                                source={require('../assets/icons/statistical.png')}
                                resizeMode="contain"
                                style={
                                    focused
                                        ? styles.tabBarIconImageActive
                                        : styles.tabBarIconImage
                                }
                            />
                            <Text
                                style={focused ? styles.tabBarTextActive : styles.tabBarText}>
                                HISTORY
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconCenter}>
                            <Image
                                source={require('../assets/icons/settings.png')}
                                resizeMode="contain"
                                style={
                                    focused
                                        ? styles.tabBarIconImageActive
                                        : styles.tabBarIconImage
                                }
                            />
                            <Text
                                style={focused ? styles.tabBarTextActive : styles.tabBarText}>
                                SETTING
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    screenOptionsTab: {
        tabBarTextActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#405ff3',
            borderRadius: 50,
            height: 70,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,
            elevation: 10,
        },
    },

    tabBarIconCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 2,
    },

    tabBarIconImage: {
        width: 23,
        height: 23,
        tintColor: '#fff',
    },

    tabBarIconImageActive: {
        width: 23,
        height: 23,
        tintColor: '#fff',
    },

    tabBarText: {
        color: '#fff',
        fontSize: 9,
        top: 3,
        fontWeight: 'bold',
    },

    tabBarTextActive: {
        color: '#fff',
        fontSize: 9,
        top: 3,
        fontWeight: 'bold',
    },
});