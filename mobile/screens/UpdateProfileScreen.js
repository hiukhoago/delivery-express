import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TouchableHighlight, TouchableWithoutFeedback, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native';
import { COLORS } from '../common';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import CookieManager from '@react-native-cookies/cookies';
import { UpdateProfileSchema } from '../components/Validation';
import { passwordSchema } from '../components/Validation';
import * as Yup from 'yup';

import axios from 'axios';

const UpdateProfileScreen = ({ route, navigation }) => {

    const { user } = route.params;
    const baseUrl = 'http://10.0.2.2:3030/api';
    const [cookie, setCookie] = useState();

    const [formData, setFormData] = useState({
        name: user.name,
        phone: user.phone,
    })

    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {})

    const updateProfile = async (values) => {
        CookieManager.get('http://10.0.2.2:3000')
            .then((cookies) => {
                console.log('auth =>', cookies?.authentication?.value);
                setCookie(cookies?.authentication?.value);
            });
        var url = baseUrl + `/user/${user.id}`;
        try {
            setisLoading(true);
            await axios.patch(url,values, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + cookie,
                }, 
              
            }).then((res) => {
                console.log('res data ------->>>', res?.data)
                if (res.data) {
                    CookieManager.set('http://10.0.2.2:8081', {
                        name: 'authentication',
                        value: res.data,
                        path: '/',
                        expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 7)),
                    }).then((done) => {
                        console.log('CookieManager.set =>', res.data);
                    });
                    Alert.alert('Cập nhật thành công!')
                    setisLoading(false);
                    navigation.navigate('Profile');
                }
            })
        } catch (error) {
            console.log(error)
            setisLoading(false);
        }
    }



    return (
        <KeyboardAwareScrollView>
            <SafeAreaView style={styles.root}>
                <StatusBar barStyle='dark-content' hidden={false} backgroundColor={COLORS.primary} />
                <View style={styles.container}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TextInput style={styles.input}
                            label='Họ và tên'
                            placeholder="Type here to translate!"
                            onChangeText={newName => setFormData({ ...formData, name : newName })}
                            defaultValue={formData.name}
                        />
                        <TextInput style={styles.input}
                            label='Số điện thoại'
                            placeholder="Type here to translate!"
                            onChangeText={newPhone => setFormData({ ...formData, phone : newPhone })}
                            defaultValue={formData.phone}
                        />
                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => updateProfile(formData)}>
                                <Text style={styles.text}>Cập nhật</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
};

export default UpdateProfileScreen;
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    header: {
        backgroundColor: COLORS.primary,
        borderBottomWidth: 0,
        elevation: 0,
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10,
        color: '#fff',
    },
    container: {
        paddingVertical: 10,

    },
    ml: {
        marginLeft: 10,
    },
    px10: {
        paddingHorizontal: 10
    },
    itemBottom: {
        flexDirection: 'row',
        fontSize: 15,
        marginVertical: 3,
    },
    text: {
        fontWeight: 'bold',
        color: '#fff',
    },
    inputStyle: {
        fontSize: 20,
        color: 'black',
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
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
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
});
