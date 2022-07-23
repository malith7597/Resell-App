import { StyleSheet,FlatList,} from 'react-native'
import React, {useState} from 'react'



import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const intialMessages=[
    {
     id:1,
     title: 'T1',
     description: 'd1'  ,
     image: require('../assets/mosh.jpg')
    },{
    id:2,
     title: 'T2',
     description: 'd2' , 
     image: require('../assets/mosh.jpg')
    }
]






function MessagesScreen(props) {
  const [messages,setMessages] =useState(intialMessages);
  const [refreshing,setRefreshing] = useState(false);
  const handleDelete =(message)=>{
    
    setMessages(messages.filter((m)=>m.id!==message.id));
  }


  return (
    <Screen style={styles.screen}>
    <FlatList //3 props data, keyextractor and renderitem
    data={messages}
    keyExtractor={messages=>messages.id.toString()}
    renderItem={({item})=><ListItem
    title={item.title}
    subTitle={item.description}
    image ={item.image}
    onPress={()=> console.log("Message selected",item)}
    renderRightActions ={()=>
      <ListItemDeleteAction onPress={()=>handleDelete(item)} />}
    />}
   ItemSeparatorComponent={ListItemSeparator}
   refreshing={refreshing}
   onRefresh={()=>setMessages([
    {
    id:2,
     title: 'T2',
     description: 'd2' , 
     image: require('../assets/mosh.jpg')
    }

   ])}
   />
    </Screen>
  
    
  
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
    
})