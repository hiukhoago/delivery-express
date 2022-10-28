import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HelloScreen from './screens/HelloScreen';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import UpdateProfileScreen from './screens/UpdateProfileScreen';
import UpdatePasswordScreen from './screens/UpdatePasswordScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListOrderScreen from './screens/ListOrderScreen';
import DetailOrderScreen from './screens/DetailOrderScreen';
import { COLORS } from './common/index';
import CookieManager from '@react-native-cookies/cookies';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import DepositScreen from './screens/DepositSreen';


const Stack = createNativeStackNavigator();


const DashboardStack = createBottomTabNavigator();

function DashboardStackScreen({ navigation, route: { params } }) {
  return (
    <DashboardStack.Navigator
      initialRouteName="Home"
      initialParams={params}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        }
      }}
    >
      <DashboardStack.Screen name="home" component={HomeScreen}

        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity onPress={() => navigation.navigate("home")}>
              <Icon name="home" color={color} size={size} />
            </TouchableOpacity>
          ),
        }}
      />
      <DashboardStack.Screen name="History" component={HistoryScreen} options={{
        unmountOnBlur: true,
        tabBarIcon: ({ color, size }) => (
          <TouchableOpacity onPress={() => navigation.navigate("History")}>
            <Icon name="assignment" color={color} size={size} />
          </TouchableOpacity>
        ),
      }} />
      <DashboardStack.Screen name="Profile" component={ProfileScreen} options={{
        unmountOnBlur: true,
        tabBarIcon: ({ color, size }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Icon name="person" color={color} size={size} />
          </TouchableOpacity>
        ),
      }} />
      <DashboardStack.Screen name="Deposit" component={DepositScreen} options={{
        unmountOnBlur: true,
        tabBarIcon: ({ color, size }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Deposit")}>
            <Icon name="login" color={color} size={size} />
          </TouchableOpacity>
        ),
      }} />
      <DashboardStack.Screen
        name="Logout"
        component={HomeScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity onPress={(e) => {
              e.preventDefault();
              // clear cookies
              CookieManager.clearAll()
                .then((success) => {
                  console.log('CookieManager.clearAll =>', success);
                  navigation.dispatch(StackActions.replace('Login'));
                });
            }}>
              <Icon name="logout" color={color} size={size} />
            </TouchableOpacity>
          ),
        }}
      />
    </DashboardStack.Navigator>
  );
}



function AppNavigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Hello"
          screenOptions={{
            headerShown: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerStyle: {
              backgroundColor: COLORS.primary,
              borderBottomWidth: 0,
              elevation: 0,
            },

          }}
        >
          <Stack.Screen name="Hello" component={HelloScreen} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Dashboard" component={DashboardStackScreen} />
          <Stack.Screen name="ListOrder" component={ListOrderScreen} />
          <Stack.Screen name="DetailOrder" component={DetailOrderScreen} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
          <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
          <Stack.Screen name="Deposit" component={DepositScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default AppNavigation;