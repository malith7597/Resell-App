import { StyleSheet, Text, View ,TextInput,Picker, TouchableWithoutFeedback,Modal,Button,FlatList} from 'react-native';
import React, { useState } from 'react';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';





export default function AppPicker({icon,items,placeholder,onSelectItem,selectedItem,...otherProps}) {
  
       const[modalVisible,setModalVisible]= useState(false);
  return (
    <React.Fragment>
    <TouchableWithoutFeedback  onPress={()=>setModalVisible(true)}>
       <View style={styles.container}>
    
     {icon && <MaterialCommunityIcons name={icon}  size={20} color={colors.dark} style={styles.icon}/>}
     <AppText style={styles.text}>{selectedItem?selectedItem.label:placeholder} </AppText>
      {icon && <MaterialCommunityIcons name="chevron-down"  size={20} color={colors.dark} />}
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType='slide'>
      <Screen>
       <Button title="Close" onPress={()=>setModalVisible(false)} />
       <FlatList data={items} keyExtractor={(item)=>item.value.toString()} renderItem={({item})=>(<PickerItem
       label={item.label}
       onPress={()=>{
        setModalVisible(false);
        onSelectItem(item);
       }}/>)} />
     

       
      </Screen>
     
    </Modal>
   </React.Fragment> // or <> </>
  )
}

const styles = StyleSheet.create({
   
    container:{
        backgroundColor:defaultStyles.colors.lightgrey,
        borderRadius:25,
        flexDirection:"row",
        padding:15,
        width:"100%",
        marginVertical:10,
    },
    icon:{
        marginRight:10
    },
    text:{
      flex:1
    }
})