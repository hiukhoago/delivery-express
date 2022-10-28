import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatVND } from '../shared/utility';
const DetailOrderScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <View>
          <Text style={{ marginLeft: 10, fontSize: 20 }}>#{item?.id}</Text>
        </View>
        <View style={styles.bg}>
          <View style={styles.item}>
            <Icon name="location-on" color="grey" size={25} style={{padding:10}}/>
            <View style={{display:'flex', flexDirection:'column',width:'100%'}}>
              <Text style={styles.itemTop}>Đia chỉ người gửi</Text>
              <Text style={styles.itemBottom}>{item?.information?.[0]?.addressDetail} {item?.information?.[0]?.address?.split('/')}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bg}>
          <View style={styles.item}>
            <Icon name="phone" color="grey" size={25} style={{padding:10}}/>
            <View style={{display:'flex', flexDirection:'column',width:'100%'}}>
              <Text style={styles.itemTop}>Số điện thoại người gửi</Text>
              <Text style={styles.itemBottom}>{item?.information[0]?.phone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bg}>
          <View style={styles.item}>
            <Icon name="location-on" color="grey" size={25} style={{padding:10}}/>
            <View style={{display:'flex', flexDirection:'column',width:'100%'}}>
              <Text style={styles.itemTop}>Đia chỉ người nhận</Text>
              <Text style={styles.itemBottom}>{item?.information?.[1]?.addressDetail} {item?.information?.[1]?.address?.split('/')}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bg}>
          <View style={styles.item}>
            <Icon name="phone" color="grey" size={25} style={{padding:10}}/>
            <View style={{display:'flex', flexDirection:'column',width:'100%'}}>
              <Text style={styles.itemTop}>Số điện thoại người nhận</Text>
              <Text style={styles.itemBottom}>{item?.information[1]?.phone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bg}>
          <View style={styles.item}>
            <Icon name="email" color="grey" size={25} style={{padding:10}}/>
            <View style={{display:'flex', flexDirection:'column',width:'100%'}}>
              <Text style={styles.itemTop}>Email</Text>
              <Text style={styles.itemBottom}>{item?.user?.email}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bg}>
          <View style={styles.item}>
            <Icon name="payments" color="grey" size={25} style={{padding:10}}/>
            <View style={{display:'flex', flexDirection:'column',width:'100%'}}>
              <Text style={styles.itemTop}>Tiền thu hộ</Text>
              <Text style={styles.itemBottom}>{+item?.note?.cod == 0 ? formatVND(item?.note?.codValue) : 'không có thu hộ'}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailOrderScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  bg: {
    margintop: 25,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 2,
    marginHorizontal: 2,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    letterSpacing:2,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
});