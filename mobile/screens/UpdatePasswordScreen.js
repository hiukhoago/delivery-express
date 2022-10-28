import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native';
import { COLORS } from '../common';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CookieManager from '@react-native-cookies/cookies';

import axios from 'axios';
import CustomButton from '../components/CustomButton';


const UpdatePasswordScreen = ({ navigation, route }) => {

    const { id } = route.params;
    const baseUrl = 'http://10.0.2.2:3030/api';
    const [loading, setLoading] = useState(false);


    const [cookie, setCookie] = useState();
    const [formData, setFormData] = useState({
        password: '',
        newPassword: '',
        confirmPassword: '',
    })

    const UpdatePassword = async (values) => {
        setLoading(true);

        CookieManager.get('http://10.0.2.2:3000')
            .then((cookies) => {
                console.log('auth =>', cookies?.authentication?.value);
                setCookie(cookies?.authentication?.value);
            });
        var url = baseUrl + `/users/${id}`;

        if (values.newPassword !== values.confirmPassword) {
            Alert.alert('Mật khẩu mới và xác nhận mật khẩu không khớp!')
            return;
        }

        if (values.password === values.newPassword) {
            Alert.alert('Mật khẩu mới không được giống mật khẩu cũ!')
            return;
        }
        if (cookie) {
            try {
                await axios.patch(url, values, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + cookie,
                    },

                }).then((res) => {
                    console.log('res data ------->>>', res?.data)
                    if (res.data) {
                        Alert.alert('Cập nhật thành công!', 'Mật khẩu mới đã được cập nhật, vui lòng đăng nhập lại!')
                        CookieManager.clearAll()
                            .then((success) => {
                                console.log('CookieManager.clearAll =>', success);
                                navigation.dispatch(StackActions.replace('Login'));
                            });
                        setLoading(false);
                    }
                })
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        }

    }

    return (
        <KeyboardAwareScrollView>
            <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <Text>Mật khẩu cũ</Text>
                    <TextInput style={styles.input}
                        placeholder="Mật khẩu cũ"
                        name="password"
                        onChangeText={password => setFormData({ ...formData, password: password })}
                        defaultValue={formData.password}
                        secureTextEntry={true}
                    />
                    <Text>Mật khẩu mới</Text>
                    <TextInput style={styles.input}
                        placeholder="Mật khẩu mới"
                        name="newPassword"
                        onChangeText={newPassword => setFormData({ ...formData, newPassword: newPassword })}
                        defaultValue={formData.newPassword}
                        secureTextEntry={true}
                    />
                    <Text>Cập nhật mật khẩu</Text>
                    <TextInput style={styles.input}
                        placeholder="Xác nhận mật khẩu"
                        name="confirmPassword"
                        onChangeText={confirmPassword => setFormData({ ...formData, confirmPassword: confirmPassword })}
                        defaultValue={formData.confirmPassword}
                        secureTextEntry={true}
                        se
                    />

                    <CustomButton text={'Cập nhật'} onPress={() => UpdatePassword(formData)} type={'primary'} />
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
};

export default UpdatePasswordScreen;
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    ml: {
        marginLeft: 10,
    },
    px10: {
        paddingHorizontal: 10
    },
    text: {
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        width: '100%',
        marginVertical: 5,
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#051F32',

    },
    input: {
        backgroundColor: COLORS.white,
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
});
