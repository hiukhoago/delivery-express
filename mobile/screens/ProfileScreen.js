import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../common';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import CookieManager from '@react-native-cookies/cookies';
import { formatVND } from '../shared/utility';

const ProfileScreen = ({ route, navigation }) => {

   const baseUrl = 'http://10.0.2.2:3030/api';
   const [isLoading, setisLoading] = useState(false);
   const [data, setData] = useState();
   const [cookie, setCookie] = useState();

   useEffect(() => {
      const getData = async () => {
         CookieManager.get('http://10.0.2.2:3000')
            .then((cookies) => {
               console.log('auth =>', cookies?.authentication?.value);
               setCookie(cookies?.authentication?.value);
            });

         var url = baseUrl + '/auth';
         if (cookie) {
            setisLoading(true);
            await axios.get(url, {
               headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + cookie,
               },
            }).then((res) => {
               console.log('res data ------->>>', res?.data)
               if (res.data) {
                  setData(res.data);
               }
               setisLoading(false);
            }).catch((error) => {
               console.log(url);
               console.log(error);
            })
         }
      }

      getData()

      const focusHandler = navigation.addListener('focus', () => {
         getData()
      });

      return () => {
         focusHandler
         setisLoading(false);
      }

   }, [cookie, navigation, route]);

   return (
      <SafeAreaView style={styles.root}>
         <StatusBar barStyle='dark-content' hidden={false} backgroundColor={COLORS.primary} />
         <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
               <>
                  <View>
                     <View style={styles.bg}>
                        <TouchableOpacity>
                           <View style={styles.item}>
                              <Text style={styles.itemIcon}>
                                 <Icon name="account-circle" color="grey" size={25} />
                              </Text>
                              <View style={styles.ml}>
                                 <Text style={styles.itemTop}>H??? v?? t??n</Text>
                                 <Text style={styles.itemBottom} >{data?.user.name} </Text>
                              </View>
                           </View>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.bg} >
                        <TouchableOpacity >
                           <View style={styles.item}>
                              <Text style={styles.itemIcon}>
                                 <Icon name="mail-outline" color="grey" size={25} />
                              </Text>
                              <View style={styles.ml}>
                                 <Text style={styles.itemTop}>Email</Text>
                                 <Text style={styles.itemBottom}>{data?.user.email}</Text>
                              </View>
                           </View>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.bg} >
                        <TouchableOpacity >
                           <View style={styles.item}>
                              <Text style={styles.itemIcon}>
                                 <Icon name="smartphone" color="grey" size={25} />
                              </Text>
                              <View style={styles.ml}>
                                 <Text style={styles.itemTop}>S??? ??i???n tho???i</Text>
                                 <Text style={styles.itemBottom}>{data?.user.phone} </Text>
                              </View>
                           </View>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.bg} >
                        <TouchableOpacity >
                           <View style={styles.item}>
                              <Text style={styles.itemIcon}>
                                 <Icon name="account-circle" color="grey" size={25} />
                              </Text>
                              <View style={styles.ml}>
                                 <Text style={styles.itemTop}>Tr???ng th??i</Text>
                                 <Text style={styles.itemBottom}>{data?.user.isActive == true ? 's???n s??ng' : 'ch??a s???n s??ng'} </Text>
                              </View>
                           </View>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.bg} >
                        <TouchableOpacity >
                           <View style={styles.item}>
                              <Text style={styles.itemIcon}>
                                 <Icon name="account-balance-wallet" color="grey" size={25} />
                              </Text>
                              <View style={styles.ml}>
                                 <Text style={styles.itemTop}>V?? ti???n</Text>
                                 <Text style={styles.itemBottom}>{formatVND(data?.user.wallet?.balance ?? 0)} </Text>
                              </View>
                           </View>
                        </TouchableOpacity>
                     </View>
                     <View style={{ flexDirection: 'row', display: 'flex' }}>
                        <CustomButton onPress={() => navigation.navigate('UpdateProfile', { user: data?.user })} type={'primary'} text={'C???p nh???t th??ng tin'} />
                     </View>
                     <View style={{ flexDirection: 'row', display: 'flex' }}>
                        <CustomButton onPress={() => navigation.navigate("UpdatePassword", { id: data?.id })} type={'primary'} text={'C???p nh???t m???t kh???u'} />
                     </View>
                  </View>
               </>
            )}
         </View>
      </SafeAreaView>
   );
};

export default ProfileScreen;
const styles = StyleSheet.create({
   root: {
      flex: 1,
   },
   bg: {
      margintop: 25,
      backgroundColor: 'white',
      height: 60,
      marginVertical: 1,
   },
   container: {
      paddingVertical: 10,
   },
   ml: {
      marginLeft: 10,
   },
   px10: {
      paddingHorizontal: 10,
   },
   item: {
      flexDirection: 'row',
   },
   itemIcon: {
      paddingHorizontal: 10,
      paddingVertical: 17,
   },
   itemTop: {
      flexDirection: 'row',
      fontSize: 13,
      fontWeight: '600',
      color: 'grey',
      marginVertical: 3,
   },
   itemBottom: {
      flexDirection: 'row',
      fontSize: 15,
      marginVertical: 3,
   },
});
