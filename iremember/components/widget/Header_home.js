import {
    StyleSheet,
    Text,
    View, ScrollView, Modal, Image, Button,FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity
  } from 'react-native';
  import React, {useState} from 'react';
  import { Stack, IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
  
  
  function Header_home({ navigation }) {
      const [number, onChangeNumber] = React.useState('');
      const [modalVisible, setModalVisible] = useState(false);
      return (
          <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Root', { screen: 'Profile' })}>
                    <View style={styles.profile}></View>
                </TouchableOpacity>
                
                <IconButton style={styles.btn}  onPress={() => navigation.navigate('AddMemory')} icon={props => <Icon  name="plus" {...props} color="#FEFEFE"/>} />
            </View>                    
          </View>

          
      );
  
  }
  
  const styles = StyleSheet.create({
      container: {
        zIndex:1,
        position: "absolute",
        marginTop:61,
        },

        btn:{
            backgroundColor: '#06648E',
            height: 44,
            width: 44,
            borderRadius: 50,
            marginRight: 16,
        },

        profile:{
            backgroundColor: '#06648E',
            height: 44,
            width: 44,
            borderRadius: 50,
            marginLeft: 16,
        },
        

        header:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-between',
            zIndex:1,
            width: 390,
            alignItems: 'flex-start'
        },

        
          
        
  })
  
  export default Header_home