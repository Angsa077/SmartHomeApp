import { NavigationContainer } from '@react-navigation/native';

//stack navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//import BottomTabsNavigation
import BottomTabsNavigation from './BottomTabsNavigation';

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen
                    name="HomeScreen"
                    component={BottomTabsNavigation}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}