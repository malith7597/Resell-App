import React from 'react'
import { Platform, StyleSheet,Text } from 'react-native'

import defaultStyles from '../config/styles'

function AppText({children,style,...otherProps}) {
  return (
    <Text style={[defaultStyles.text,style]} {...otherProps}>{children}</Text>
  )
}

// or 
/* function AppText(props) {
  return (
    <Text>{props.children}</Text>
  )
} */

const styles = StyleSheet.create({
   
   ...Platform.select({
    ios:{
        fontWeight:50,
        fontFamily:"Roboto"
    },
    android:{
        fontWeight: 30,
        fontFamily:"Courier"
    },
    
    
   
}),

   


});

export default AppText