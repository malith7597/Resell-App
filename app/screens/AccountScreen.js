import {  StyleSheet, Text, View,FlatList, ImageComponent } from 'react-native'
import React from 'react'

import ListItem from '../components/ListItem'
import  Screen from '../components/Screen'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'
const menuItems=[
{ title:"My Listings",
  icon :{
    name:"format-list-bulleted",
    backgroundColor:colors.primary
  }
},
{
  title:"My Messages",
  icon :{
    name:"email",
    backgroundColor:colors.secondary
  }


}
]
function  AccountScreen(props) {
  return (
   <Screen style={styles.screen}>
    <View style={styles.container}>
    <ListItem
    title="Malith Thisara"
    subTitle="maliththisarakavinda@gmail.com"
    image={require('../assets/mosh.jpg')}>

    </ListItem>
    </View>
    <View style={styles.container}>
        <FlatList
        data={menuItems}
        keyExtractor={(menuItem)=>menuItem.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({item})=>
            <ListItem
            title={item.title}
            ImageComponent={
            <Icon
            name={item.icon.name}
            size={40}
            iconColor={colors.white}
            backgroundColor={item.icon.backgroundColor}
            />}/>
            
        }/>
         


    
        </View>
         <ListItem title="Log out"
        ImageComponent={
          <Icon name="logout" iconColor={colors.white} size={40} backgroundColor="#ffe66d" />
        } />
        
    
   </Screen>
  );
}

export default AccountScreen

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
    },
    screen:{
      backgroundColor:colors.lightgrey
    }
})