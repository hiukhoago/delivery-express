import CookieManager from '@react-native-cookies/cookies';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button, Pressable, ActivityIndicator, RefreshControl, Modal, Alert, TextInput, } from 'react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { OrderStatus } from '../shared/enum';
import { formatVND, serialize } from '../shared/utility';
import { COLORS } from '../common/index';
import Moment from 'moment';
import CustomButton from '../components/CustomButton';
import { Keyboard } from 'react-native';



const ListOrderScreen = ({ route, navigation }) => {
   const baseUrl = 'http://10.0.2.2:3030/api';
   Moment.locale('vi');
   const [isLoading, setisLoading] = useState(true);
   const { status } = route.params
   const [cookie, setCookie] = useState();
   const [principal, setPrincipal] = useState();
   const [data, setData] = useState([]);
   const [modalVisible, setModalVisible] = useState(false);
   const [noteRedelivery, setNoteRedelivery] = useState();

   const [query, setQuery] = useState({ filters: { status: status } });

   const fetchData = async () => {
      setisLoading(true)
      CookieManager.get('http://10.0.2.2:3000')
         .then((cookies) => {
            console.log('auth =>', cookies?.authentication?.value);
            setCookie(cookies?.authentication?.value);
         });
      const url = baseUrl + '/orders'
      const urlWithQuery = query ? `${url}?${serialize(query)} ` : url
      if (cookie && status) {
         await axios.get(urlWithQuery, {
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

         await axios.get(baseUrl + '/auth', {
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + cookie,
            },
         }).then(res => {
            console.log('res data ------->>>', res)
            if (res.status == 200) {
               setPrincipal(res?.data?.user);
            }
            setisLoading(false)
         }).catch(err => {
            setisLoading(false)
            throw new Error(err);
         })
      }
   }



   useEffect(() => {
      fetchData();
      return () => {
         setPrincipal();
         setisLoading(false)
      }
   }, [cookie, status]);

   const handleUpdateStatus = async (item, status) => {
      setisLoading(true)
      console.log('item ------->>>', item)
      if (principal) {
         if (item?.status === OrderStatus.ASSIGNING && item?.note?.codValue > principal?.wallet?.balance) {
            Alert.alert('Thông báo', 'Số dư không đủ để thực hiện nhận đơn giao hàng', [{ text: 'OK', onPress: () => navigation.navigate('Deposit') }])
            setisLoading(false)
            return;
         } else {
            await axios.patch(baseUrl + `/order/${item?.id}`, { status: status }, {
               headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + cookie,
               },
            }).then(res => {
               console.log('res data ------->>>', res)
               if (res.status == 200) {
                  fetchData();
               }
               setisLoading(false)
            }).catch(err => {
               setisLoading(false)
               throw new Error(err);
            })
         }
      }
   }

   const handleNoteRedelivery = async (item, note, status) => {
      setisLoading(true)
      await axios.patch(baseUrl + `/order/${item?.id}`, { supplierNote: note, status: status }, {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + cookie,
         },
      }).then(res => {
         if (res.status == 200) {
            alert('Update note success')
            fetchData();
         }
      }).catch(err => {
         setisLoading(false)
         throw new Error(err);
      })
   }

   const handleNoteReDelivery = async (note) => {
      Keyboard.dismiss()
      setNoteRedelivery(note)
   }


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
            {item?.supplierNote && (
               <View style={{ flexDirection: 'row', padding: 5, }}>
                  <Text>
                     <Icon name="note" color="gray" size={20} />
                  </Text>
                  <Text style={styles.item5}>{item?.supplierNote}</Text>
               </View>
            )}
         </TouchableOpacity>
         {item?.status == OrderStatus.ASSIGNING && item?.status != OrderStatus.COMPLETED && item?.status != OrderStatus.CANCELLED && (
            <View style={{ flexDirection: 'row' }}>
               <CustomButton text={'Xác nhận đơn hàng'} onPress={() => { handleUpdateStatus(item, item?.note?.pickUpAtPlace == true ? OrderStatus.ACCEPTED : OrderStatus.INPROCESS) }} type={'primary'} icon={'check'} />
            </View>
         )}
         {item?.status == OrderStatus.ACCEPTED && (
            <View style={{ flexDirection: 'row' }}>
               <CustomButton text={' Nhận hàng'} onPress={() => { handleUpdateStatus(item, OrderStatus.INPROCESS) }} type={'primary'} icon={'check'} />
            </View>
         )}
         {item?.status == OrderStatus.INPROCESS && (
            <View style={{ flexDirection: 'row' }}>
               <CustomButton text={'Giao thành công'} onPress={() => { handleUpdateStatus(item, OrderStatus.COMPLETED) }} type={'success'} icon={'check'} />
               <CustomButton text={'Giao thất bại'} onPress={() => { handleUpdateStatus(item, OrderStatus.CANCELLED) }} type={'danger'} icon={'check'} />
               <CustomButton text={'Hẹn giao lại'} onPress={() => { setModalVisible(!modalVisible) }} type={'primary'} icon={'check'} />
            </View>
         )}
         {item?.status == OrderStatus.REDELIVERY && (
            <View style={{ flexDirection: 'row' }}>
               <CustomButton text={'Giao thành công'} onPress={() => { handleUpdateStatus(item, OrderStatus.COMPLETED) }} type={'success'} icon={'check'} />
               <CustomButton text={'Giao thất bại'} onPress={() => { handleUpdateStatus(item, OrderStatus.CANCELLED) }} type={'danger'} icon={'check'} />
            </View>
         )}
         <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
               setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
               <View style={styles.modalView}>
                  <Text style={styles.modalText}>Ghi chú</Text>
                  <TextInput
                     style={styles.input}
                     placeholder="Nhập ghi chú"
                     defaultValue={noteRedelivery}
                     onChangeText={(text) => {handleNoteReDelivery(text)}}
                     placeholderText='Nhập ghi chú'
                  />
                  <View>
                     <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNoteRedelivery(item, noteRedelivery, OrderStatus.REDELIVERY)}>
                        <Text style={styles.textStyle}>Ok</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                        style={styles.button}
                        onPress={() => setModalVisible(false)}>
                        <Text style={styles.textStyle}>Huỷ</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </Modal>
      </View>
   );


   return (
      <SafeAreaView style={styles.container}>
         {isLoading ? <ActivityIndicator /> : (
            data.length > 0 ? (
               <FlatList
                  legacyImplementation={true}
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

export default ListOrderScreen

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
   centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      position: 'relative',
   },
   modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
   },
   button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
   },
   buttonOpen: {
      backgroundColor: "#F194FF",
   },
   buttonClose: {
      backgroundColor: "#2196F3",
   },
   textStyle: {
      color: "white",
      fontWeight: "bold",
      justifyContent: 'flex-end',
      display: 'flex',
      flexDirection: 'row',
   },
   modalText: {
      marginBottom: 15,
      textAlign: "left"
   },
   input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
   },
});
