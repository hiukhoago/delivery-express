import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Alert, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import Logo from '../assets/logo.png';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import axios from 'axios';
import { COLORS } from '../common/index';
import CookieManager from '@react-native-cookies/cookies';
import { hasAdminRole, hasDriverRole } from '../library/utility';


const LoginScreen = ({ navigation, route }) => {
    const baseUrl = 'http://10.0.2.2:3030/api';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [cookie, setCookie] = useState();

    useEffect(() => {
        CookieManager.get('http://10.0.2.2:8081')
            .then((cookies) => {
                if (cookies) {
                    setCookie(cookies?.authentication?.value);
                }
            });
        if (cookie) {
            axios.get(baseUrl + '/auth', {
                headers: {
                    'Authorization': 'Bearer ' + cookie,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                if (res.data && hasDriverRole(res?.data[1].authorities)) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Dashboard' }],
                    });
                }
            })
        }

        return () => {
            setCookie(null);
        }

    }, [cookie]);

    const onPressLogin = async (email, password) => {
        var url = baseUrl + '/auth/in';
        await axios.post(url, { email, password })
            .then((res) => {
                if (res.data && hasDriverRole(res?.data[1].authorities)) {
                    // set a cookie
                    CookieManager.set('http://10.0.2.2:8081', {
                        name: 'authentication',
                        value: res.data?.[0],
                        path: '/',
                        expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 7)),
                    }).then((done) => {
                        console.log('CookieManager.set =>', done);
                    });
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Dashboard' }],
                    });
                } else {
                    Alert.alert('????ng nh???p kh??ng th??nh c??ng!', 'Email ho???c m???t kh???u kh??ng ????ng!')
                }
            })
            .catch((error) => {
                console.log(url);
                console.log(error);
                Alert.alert('????ng nh???p kh??ng th??nh c??ng!', 'Email ho???c m???t kh???u kh??ng ????ng!')
            })
    }

    return (
        <SafeAreaView style={styles.root}>
            <StatusBar hidden={false} backgroundColor={COLORS.primary} />
            <View style={styles.container}>
                <Image alt=""
                    source={Logo}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <CustomInput placeholder={'Nh???p t??i kho???n'} value={email} setValue={setEmail} secureTextEntry={false} />
                <CustomInput placeholder={'Nh???p m???t kh???u'} value={password} setValue={setPassword} secureTextEntry={true} />

                <View style={{ flexDirection: 'row', display: 'flex' }}>
                    <CustomButton text={'????ng nh???p'} onPress={() => onPressLogin(email, password)} type={'primary'} />
                </View>
                <View style={{ flexDirection: 'row', display: 'flex' }}>
                    <CustomButton text={'Qu??n m???t kh???u'} type={'secondary'} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text>B???n ch??a c?? t??i kho???n ?
                        <Text style={{ color: '#051F32', fontWeight: 'bold' }} onPress={() =>
                            navigation.navigate("Signup")}>
                            ????ng k??
                        </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxHeight: 200,
        maxWidth: 300,
    },
});
