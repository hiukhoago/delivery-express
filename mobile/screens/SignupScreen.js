import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView, Alert,StatusBar } from 'react-native';
import Logo from '../assets/logo.png';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { Platform } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const SignupScreen = ({ navigation, route }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    const onPressSignUp = async (email,password,rePassword) => {
        const baseUrl = 'http://10.0.2.2:3030/api'
        var url = baseUrl + '/auth/up';
        if(password !== rePassword){
            Alert.alert('Password not match!');
            return false;
        }
        else{
            await axios.post(url, { email, password, authorities :['driver'] })
            .then((res) => {
                if (res.data) {
                    setData(res.data);
                    Alert.alert(
                        'Success signed Up!',
                    );
                    navigation.navigate('Dashboard');
                } else {
                    Alert.alert('Fail to sign up ! No Data'); 
                    return false
                }
            })
            .catch((error) => {
                console.log(url);
                Alert.alert('Fail to sign up!', error.message + ':  Email already exists ',);
                console.log(error);
            });
        }
        
    }

    return (
        <SafeAreaView style={styles.root} >
            <StatusBar hidden={false} />
            <View style={styles.container} >
                <Image 
                    alt=""
                    source={Logo}
                    style={styles.logo}
                    resizeMode="contain" />
                <CustomInput style={styles.inputStyle }
                    placeholder={'Nhập tên tài khoản'}
                    value={email}
                    setValue={setEmail}
                    secureTextEntry={false}
                /> 
                <CustomInput style={styles.inputStyle}
                    placeholder={'Nhập mật khẩu '}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                /> 
                <CustomInput style={styles.inputStyle}
                    placeholder={'Nhập lại mật khẩu '}
                    value={rePassword}
                    setValue={setRePassword}
                    secureTextEntry={true}
                /> 
                <CustomButton text={'Đăng ký'} type={'primary'} onPress={()=>onPressSignUp(email,password,rePassword)} />
                <View style={{ alignSelf: 'center' }}>
                    <Text>Don't have any account ?
                        <Text style={{ color: '#051F32', fontWeight: 'bold' }} onPress={() =>
                            navigation.navigate("Login")}>
                            sign in
                        </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView >
    );
};

export default SignupScreen;
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

    inputStyle: {
        fontSize: 20,
        color: 'black',
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
    },

    textBtn: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginVertical: 50,
    },

    textBtnLabel: {
        fontSize: 20,
        color: 'black',
    },
});
