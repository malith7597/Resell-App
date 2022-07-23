import { StyleSheet, Text, View ,Image,TouchableHighlight} from 'react-native'
import React from 'react'
import Swipeable from "react-native-gesture-handler/Swipeable";
import {MaterialCommunityIcons} from '@expo/vector-icons'



import AppText from './AppText'
import colors from '../config/colors'

export default function ListItem({title,subTitle,image ,onPress,renderRightActions, ImageComponent}) {
  return (
        <Swipeable renderRightActions={renderRightActions}>
         <TouchableHighlight 
        underlayColor={colors.lightgrey}
        onPress={onPress}>
        <View style={styles.container}>
        {ImageComponent}
         { image && <Image style={styles.image} source={image}></Image>}
        <View style={styles.detailContainer}>
        <AppText style={styles.title} numberOfLines={1}  >{title}</AppText>
       { subTitle && <AppText style={styles.subTitle} numberOfLines={2}  >{subTitle}</AppText>}
      
     </View>
      <MaterialCommunityIcons name='chevron-right' size={35} color={colors.medium}/>
    </View>
    </TouchableHighlight>
    </Swipeable>



   
   
  
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:15,
        backgroundColor:colors.white,
         alignItems:'center'
        
    },
    detailContainer:{
        marginLeft:10,
        justifyContent:"center",
        flex:1,
       

    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10,
    },
     subTitle:{
        color: colors.grey,
    },
    title:{
        fontSize:24,
        fontWeight:600,

    },

})