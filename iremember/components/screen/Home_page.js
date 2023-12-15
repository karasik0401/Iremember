import {
    StyleSheet,
    Text,
    View, ScrollView, Modal, Image, Button,FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity
  } from 'react-native';
  import React, {useState} from 'react';
  import { Stack, IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
  
  
  function Home_page({ navigation }) {
      const [number, onChangeNumber] = React.useState('');
      const [modalVisible, setModalVisible] = useState(false);
      return (
          <View style={styles.container}>

          
              <Image
                style={styles.stretch}
                source={require('../../logo/map.png')}
      />
            <View style={styles.centeredView}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.profile}></View>
            </TouchableOpacity>
            
            <IconButton style={styles.btn}  onPress={() => navigation.navigate('Memory')} icon={props => <Icon  name="plus" {...props} color="#FEFEFE"/>} />
            </View>
        
            </View>
      
            <TouchableOpacity onPress={() => navigation.navigate('Memory')}>
                <Image
                    style={styles.photo}
                    source={require('../../logo/mark.png')}
                    />
            </TouchableOpacity>
                  
          </View>

          
      );
  
  }
  
  const styles = StyleSheet.create({
      container: {
          height: 844,
          
      
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
            width: 390,
            alignItems: 'flex-start'
        },
        stretch:{
            position: 'absolute',
            zIndex:0,
        },
        centeredView: {
            flex: 1,
            justifyContent: 'flex-start',
            marginTop: 61,
          },
          icon:{
            marginHorizontal:6
          },
        
          
        
  })
  
  export default Home_page