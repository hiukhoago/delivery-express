import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableHighlight, Image, Button, View, SafeAreaView, Text, Alert, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../common/index'
import CookieManager from '@react-native-cookies/cookies';


const HelloScreen = ({ navigation }) => {

  const [cookie,setCookie] = useState(undefined);

  useEffect(() => {
    CookieManager.get('http://10.0.2.2:3000')
      .then((cookies) => {
        console.log('CookieManager.get =>', cookies);
        if (cookies?.authentication?.value) {
          setCookie(cookies?.authentication?.value);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }],
          });
        }
      });

      return () => {
        console.log('unmounting');
        setCookie(undefined);
      }

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image alt=""
          style={styles.logo}
          source={require('../assets/bg-home.png')}
          resizeMode="contain" />
        <Text style={styles.titleText}>Welcome to Delivery</Text>
        <Text style={styles.subText}>Track your parcel and make sure it arrivers to the destination</Text>
        <View style={{ marginVertical: 20 }}>
          <TouchableOpacity>
            <Button
              title="Get Started"
              color={"#051F32"}
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                });
              }}>
            </Button>
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: 'center' }}><Text>Don't have any account ?
          <Text style={{ color: '#051F32', fontWeight: 'bold' }} onPress={() =>
            navigation.navigate("Signup")}>
            Sign up
          </Text>
        </Text></View>
      </View>
    </SafeAreaView>



  )
}

export default HelloScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FCD54F'
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center'
  },
  button: {
    borderRadius: 25,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 50,
    alignSelf: 'center',
    textAlign: 'center',
  }

})