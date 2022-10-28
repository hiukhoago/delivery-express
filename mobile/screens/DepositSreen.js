import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../common';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import CookieManager from '@react-native-cookies/cookies';
import { formatVND } from '../shared/utility';
import { TextInput } from 'react-native-gesture-handler';
import { ActivityType } from '../shared/enum';

const DepositScreen = ({ route, navigation }) => {

    const baseUrl = 'http://10.0.2.2:3030/api';
    const [isLoading, setisLoading] = useState(false);
    const [data, setData] = useState();
    const [cookie, setCookie] = useState();

    CookieManager.get('http://10.0.2.2:3000')
    .then((cookies) => {
        console.log('auth =>', cookies?.authentication?.value);
        setCookie(cookies?.authentication?.value);
    });

    const buttons = [100000, 200000, 300000, 400000, 500000, 600000];
    const [selectInput, setSelectInput] = useState()
    const formatVND = (n) => {
        return parseFloat(n).toLocaleString('it-IT');
    }
    const [amount, setAmount] = useState(0)

    const handleSetAmount = (a, i) => {
        setSelectInput(i)
        if (a == 0) setAmount(0);
        else setAmount(amount + a)
    };

    const handleDeposit = async (a,t) => {
        var url = baseUrl + '/activity';
        if (cookie) {
            setisLoading(true);
            await axios.post(url,{
                amount: a,
                activityType: t,
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + cookie,
                },
            }).then((res) => {
                console.log('res data ------->>>', res?.data)
                if (res.status == 201) {
                    setData(res.data);
                    Alert.alert('Thành công', 'nạp tiền thành công');
                }
                setisLoading(false);
            }).catch((error) => {
                console.log(error);
                console.log(url);
                Alert.alert('Thất bại', 'nạp tiền thất bại');
            })
        }
    }

    return (
        <SafeAreaView style={styles.root}>
            <StatusBar barStyle='dark-content' hidden={false} backgroundColor={COLORS.primary} />
            <View style={styles.container}>
                {isLoading ? <ActivityIndicator /> : (
                    <>
                        <View>
                            <View style={styles.bg}>
                                <Text style={styles.title}>Nạp tiền</Text>
                                <View>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Vui lòng nhập số tiền nạp"
                                        value={formatVND(amount) ?? 0}
                                        editable={false} 
                                    />
                                </View>
                            </View>
                            <View style={styles.flexWrap}>
                                {buttons.map((item, index) => (
                                    <TouchableOpacity style={styles.button} key={index} onPress={() => handleSetAmount(item, index)}>
                                        <View>
                                            <Text style={styles.buttonText}>{formatVND(item)}</Text>
                                            {selectInput == index ? (
                                                <View style={styles.buttonSelect}>
                                                    <Icon name="check" size={10} color={COLORS.primary} />
                                                </View>
                                            ) : null}
                                        </View>
                                    </TouchableOpacity>
                                ))}
                                <TouchableOpacity onPress={() => setAmount(0)} >
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>Clear</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', display: 'flex' }}>
                                <CustomButton onPress={() => {handleDeposit(amount,ActivityType.DEPOSIT)}} type={'primary'} text={'Nạp tiền'} />
                            </View>
                        </View>
                    </>
                )}
            </View>
        </SafeAreaView>
    );
};

export default DepositScreen;
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    bg: {
        margintop: 25,
        backgroundColor: 'white',
        height: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    container: {
        paddingVertical: 10,
    },
    button: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        backgroundColor: COLORS.primary,
        borderColor: COLORS.border,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 110,
        maxWidth: 250,
        color: COLORS.primary,
        textAlign: 'center',
        
    },
    flexWrap: {
        position: 'relative',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonSelect: {
        borderRadius: '50%',
        position: 'absolute',
        right: 2,
        top: 2,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    }
});
