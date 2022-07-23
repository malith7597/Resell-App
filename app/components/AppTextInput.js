import { StyleSheet, Text, View ,TextInput, Platform} from 'react-native'
import React from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultStyles from '../config/styles'
 
export default function AppTextInput({icon,...otherProps}) {
  return (
    <View style={styles.container}>
     {icon && <MaterialCommunityIcons name={icon}  size={20} color={colors.dark} style={styles.icon}/>}
     <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
   
    container:{
        backgroundColor:defaultStyles.colors.lightgrey,
        borderRadius:25,
        flexDirection:"row",
        padding:15,
        width:"100%",
        marginVertical:10
    },
    icon:{
        marginRight:10
    }
})