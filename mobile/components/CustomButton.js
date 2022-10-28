import React from 'react'
import { Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../common/index';

const CustomButton = ({onPress,text,type,icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,styles[`container_${type}`]]}>
        {icon ? (<Text><Icon name={icon} color="white" size={20} /></Text>) : ([])}
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container : {
        width: '100%',
        marginVertical: 10,

        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#051F32',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

        flex:1,
        marginHorizontal: 5,
        flexWrap: 'nowrap',

    },

    container_primary : {
        backgroundColor: '#051F32',
    },
    container_danger : {
        backgroundColor: COLORS.danger,
    },
    container_success : {
        backgroundColor: COLORS.success,
    },
    text:{
        fontWeight:'bold',
        color: '#fff',
        paddingHorizontal: 10,
    }
})