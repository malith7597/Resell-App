import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import ListItem from '../components/ListItem'
import AppText from '../components/AppText'

const ListingDetailScreen = () => {
  return (
    <View>
      <Image  style={styles.image} source={require('../assets/jacket.jpg')}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale.</AppText>
      <AppText style={styles.price}> $100</AppText>
    <View style={styles.userContainer}>
        <ListItem
        image={require('../assets/mosh.jpg')}
        title="Mosh Hamedani"
        subTitle="5 listings"  // very temporary
        />

    </View>
     

      
      </View>
      
    </View>
  )
}

export default ListingDetailScreen

const styles = StyleSheet.create({
    detailsContainer:{
        padding:20
    }
    ,image:{
        width:"100%",
        height:300
    },
     price:{
        color:colors.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,

    },
    userContainer:{
        marginVertical:50
    }
   
   



})