import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button, Pressable, StatusBar, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../common';
import Moment from 'moment';
import CookieManager from '@react-native-cookies/cookies';
import axios from 'axios';
import { OrderStatus } from '../shared/enum';
import { formatVND, serialize } from '../shared/utility';

const HistoryScreen = ({route,navigation}) => {
  const baseUrl = 'http://10.0.2.2:3030/api';
  Moment.locale('vi');
  const [isLoading, setisLoading] = useState(true);
  const [cookie, setCookie] = useState();
  const [data, setData] = useState([]);

  const [query, setQuery] = useState({ filters: { status: OrderStatus.COMPLETED } });

  useEffect(() => {
    setisLoading(true)
    CookieManager.get('http://10.0.2.2:3000')
      .then((cookies) => {
        console.log('auth =>', cookies?.authentication?.value);
        setCookie(cookies?.authentication?.value);
      });
    const url = baseUrl + '/orders'
    const urlWithQuery = query ? `${url}?${serialize(query)} ` : url
    if (cookie) {
      axios.get(urlWithQuery, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + cookie,
        },
      }).then(res => {
        console.log('res data ------->>>', res)
        if (res.status == 200) {
          setData(res?.data);
        }
        setisLoading(false)
      }).catch(err => {
        setisLoading(false)
        throw new Error(err);
      })
    }

    return () => {
      setData([]);
      setisLoading(false)
    }

  }, [cookie, route, navigation]);

  console.log('data ------->>>', data);

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  const Item = ({ item }) => (
    <View style={styles.bg} >
      <TouchableOpacity onPress={() => navigation.navigate('DetailOrder', { item: item })}>
        <Text style={styles.item1}></Text>
        <Text style={styles.item2}>
          Ngày giao dự kiến:
          <Text style={{ color: 'black' }}> {Moment(item?.expected_delivery_date).format('L')}</Text>
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.item3}>
            <Text>Mã hóa đơn: </Text>
            <Text style={styles.item4}># {item?.id}</Text>
          </View>
          <View style={styles.item3}>
            <Text>Tổng tiền: </Text>
            <Text style={styles.item4}>{formatVND(item?.total) ?? 0}</Text>
          </View>
          <View style={styles.item3}>
            <Text>Tiền thu hộ: </Text>
            <Text style={styles.item4}>{item?.note?.cod ? formatVND(item?.note?.codValue.toString()) : 'không có thu hộ'}</Text>
          </View>
        </View>
        {item?.note?.pickUpAtPlace && (
               <View style={{ flexDirection: 'row', padding: 5, }}>
                  <Text>
                     <Icon name="location-on" color="gray" size={20} />
                  </Text>
                  <Text style={styles.item5}>{item?.information?.[0]?.addressDetail} {item?.information?.[0]?.address?.split('/')}</Text>
               </View>
            )}
            <View style={{ flexDirection: 'row', padding: 5, }}>
               <Text>
                  <Icon name="location-on" color="gray" size={20} />
               </Text>
               <Text style={styles.item5}>{item?.information?.[1]?.addressDetail} {item?.information?.[1]?.address?.split('/')}</Text>
            </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        data.length > 0 ? (
          <FlatList
            l egacyImplementation={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
            <Text>Không có đơn hàng nào !! </Text>
          </View>
        )

      )}
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  root: {
     flex: 1,
  },
  bg: {
     backgroundColor: '#fff',
     height: 'auto',
     paddingVertical: 5,
     paddingHorizontal: 5,
     marginBottom: 10
  },
  item1: {
     fontWeight: 'bold',
     fontSize: 15,
     padding: 5,
  },
  item2: {
     fontSize: 13,
     color: 'gray',
     paddingBottom: 5,
     paddingLeft: 5,
  },
  item3: {
     marginVertical: 5,
     alignItems: 'center',
     borderWidth: 1,
     borderColor: 'gray',
     paddingVertical: 5,
     paddingHorizontal: 5,
     width: '33.33%',
  },
  item4: {
     fontWeight: 'bold',
  },
  item5: {
     fontSize: 12,
     color: 'gray',
  },
  button: {
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     paddingHorizontal: 15,
     paddingVertical: 15,
     width: '100%',
     borderWidth: 1,
     borderColor: 'gray',
     backgroundColor: COLORS.primary,
     textAlign: 'center',
  },
});
