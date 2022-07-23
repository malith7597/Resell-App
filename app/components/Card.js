import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from '../components/AppText'

export default function Card({title,subTitle,image}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}> {subTitle}</AppText>
      </View>
     

    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        overflow:'hidden',
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20

    },
    detailsContainer:{
        padding:20
    },
    image:{
        width:"100%",
        height:200,

    },subTitle:{
        color:colors.secondary,
        fontWeight:'bold'
    }
    ,
    title:{
        marginBottom:7,
    },


})