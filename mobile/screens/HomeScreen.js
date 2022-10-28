import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Button, Image, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../common';
import axios from 'axios';
import CookieManager from '@react-native-cookies/cookies';
import { useRoute } from '@react-navigation/native';
import { OrderStatus } from '../shared/enum';


const Item = ({ count, title }) => (
    console.log(count, title),
    <View>
        <Text style={styles.title}>{count}</Text>
        <Text style={styles.sub}>{title}</Text>
    </View>
)

export default function HomeScreen({ navigation }) {
    const baseUrl = 'http://10.0.2.2:3030/api';

    const [loading, setLoading] = useState(true);
    const [cookie, setCookie] = useState(undefined);

    const [isEnabled, setIsEnabled] = useState(true);
    const [data, setData] = useState([
        {
            count: 0,
            title: "Nhận đơn",
            status: OrderStatus.ASSIGNING
        },
        {
            count: 0,
            title: "Đơn hàng đã nhận ",
            status: OrderStatus.ACCEPTED
        },
        {
            count: 0,
            title: "Đơn hàng đang giao",
            status: OrderStatus.INPROCESS

        },
        {
            count: 0,
            title: "Giao thất bại",
            status: OrderStatus.CANCELLED

        },
        {
            count: 0,
            title: "Giao thành công",
            status: OrderStatus.COMPLETED

        },
        {
            count: 0,
            title: "Chờ giao laị",
            status: OrderStatus.REDELIVERY
        },
    ]);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const route = useRoute();

    console.log('data ------->>>', data);

    useEffect(() => {
        setLoading(true);
        CookieManager.get('http://10.0.2.2:3000')
            .then((cookies) => {
                console.log('auth =>', cookies?.authentication?.value);
                setCookie(cookies?.authentication?.value);
            });

        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookie,
            },
        }

        var url = baseUrl + '/orders/count/all-status';
        if (cookie) {
            console.log('auth cuar driver', 'Bearer ' + cookie)
            axios.get(url, options).then((res) => {
                console.log('res data ------->>>', res?.data)
                if (res?.data) {
                    const total1 = res?.data?.total1[0];
                    const total2 = res?.data?.total2;
                    if (total1?._id == data[0]?.status) {
                        data[0].count = total1.count;
                    }
                    data.map((item, index) => {
                        total2.map((item2) => {
                            if (item2._id == item.status) {
                                data[index].count = item2.count;
                            }
                        })
                    })
                    setData(data);
                }
                setLoading(false);
            }).catch((error) => {
                console.log(url);
                console.log(error);
            })
        }

        return () => {
            setLoading(false);
        }

    }, [cookie]);

    const handleClaimOrder = (status) => {
        navigation.navigate('ListOrder', {
            status: status,
        });
    }
    
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
            <View style={styles.avalible}>
                <Text style={{ paddingLeft: 8 }}>I am avalable</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#051F32"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            {loading ? <ActivityIndicator /> : isEnabled && (
                <View style={styles.app}>
                    {data && data?.map((item, index) => {
                        console.log('item ------->>>', item)
                        return (
                            <TouchableHighlight key={index} onPress={() => handleClaimOrder(item?.status)} style={styles.item}>
                                <Item count={item.count} title={item?.title} status={item?.status} />
                            </TouchableHighlight>
                        )
                    })}
                </View>
            )}
        </SafeAreaView>
    );
}
const gap = 10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7'
    },
    avalible: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderColor: COLORS.border,
        backgroundColor: '#fff'
    },
    app: {
        marginHorizontal: "auto",
        width: 400,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: (gap / -2),
    },
    item: {
        marginHorizontal: gap / 2,
        flex: 1,
        marginBottom: 10,
        minWidth: 150,
        maxWidth: 200,
        height: 150,
        justifyContent: "center",
        alignItems: "center",

        // my visual styles; not important for grid
        padding: 10,



        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderColor: "#fff"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    sub: {
        fontSize: 16,
    }

});

