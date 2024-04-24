import {
    StyleSheet,
    Text,
    View, ScrollView, Modal, Image, Button,FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity
  } from 'react-native';
  import React, {useState} from 'react';
  import MapView from 'react-native-maps';
  import { Stack, IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
  import Header_home from '../widget/Header_home';
  import Btn from '../widget/Btn';
  
  
  function Home_page({ navigation }) {
      const [number, onChangeNumber] = React.useState('');
      const [modalVisible, setModalVisible] = useState(false);
      return (
          <View style={styles.container}>
           
            <Header_home navigation={navigation} style={styles.header}/>
            
               
            <MapView style={styles.map} />

            
            <TouchableOpacity onPress={() => navigation.navigate('Memory')}>
                <Image
                    style={styles.photo}
                    source={require('../../logo/mark.png')}
                />
            </TouchableOpacity>
      
            <Btn/>
                  
          </View>

          
      );
  
  }
  
  const styles = StyleSheet.create({
      container: {
          height: '100%',
          
      
        },

        map: {
            zIndex: 0,
            width: '100%',
            height: '100%',
          },

        photo:{
            marginTop:-300,
            marginLeft:160,
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
            marginTop: 200,
            width: 390,
            alignItems: 'flex-start'
        },
        stretch:{
            position: 'absolute',
            zIndex:0,
        },
        centeredView: {

          },
          icon:{
            marginHorizontal:6
          },
        
          
        
  })
  
  export default Home_page