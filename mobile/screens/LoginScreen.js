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
                    Alert.alert('Đăng nhập không thành công!', 'Email hoặc mật khẩu không đúng!')
                }
            })
            .catch((error) => {
                console.log(url);
                console.log(error);
                Alert.alert('Đăng nhập không thành công!', 'Email hoặc mật khẩu không đúng!')
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
                <CustomInput placeholder={'Nhập tài khoản'} value={email} setValue={setEmail} secureTextEntry={false} />
                <CustomInput placeholder={'Nhập mật khẩu'} value={password} setValue={setPassword} secureTextEntry={true} />

                <View style={{ flexDirection: 'row', display: 'flex' }}>
                    <CustomButton text={'Đăng nhập'} onPress={() => onPressLogin(email, password)} type={'primary'} />
                </View>
                <View style={{ flexDirection: 'row', display: 'flex' }}>
                    <CustomButton text={'Quên mật khẩu'} type={'secondary'} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text>Bạn chưa có tài khoản ?
                        <Text style={{ color: '#051F32', fontWeight: 'bold' }} onPress={() =>
                            navigation.navigate("Signup")}>
                            Đăng ký
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
