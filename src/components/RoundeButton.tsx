import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {  Text } from 'react-native';
import { AppColors } from '../theme/AppTheme';

interface Props {
  text: string,
  onPress: ()=>void
}

export const RoundeButton = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.roundedButton}
      onPress={()=>onPress()}
    >
    <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({

    roundedButton:{
      width: '100%',
      height: 50,
      backgroundColor: AppColors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15
  },

  textButton:{
    color: 'white'
  }

  
})
