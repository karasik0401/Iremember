import {
    StyleSheet,
    Text,
    View, ScrollView, SafeAreaView,  Image, Button,FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity
  } from 'react-native';
  import React from 'react';
  import { Feather, Entypo } from "@expo/vector-icons";
  import { Stack, IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Memory_card from '../widget/Memory_card';
  
  
  function Memory_list({ navigation }) {
      const [number, onChangeNumber] = React.useState('');
    
      return (
          <View style={styles.container}>
              
              <View style={styles.header}>
                <View style={styles.header_row}>
                  <IconButton style={styles.icon_header} onPress={() => navigation.navigate('Profile')}  icon={props => <Icon   name="arrow-left" {...props} color="#06648E"/>} />
                  <Text style={styles.title}>Мои воспоминания</Text>
                </View>
              </View>
              <SafeAreaView >
            <Feather
                name="search"
                size={20}
                color='#ccc'
                style={{ marginLeft: 30,
                marginBottom: -35,
                marginTop: 16,
                zIndex: 1, }}
                />
                <TextInput placeholder='Поиск' clearButtonMode='always'
                        style={styles.search}
                        autoCapitalize="none"
                        autoCorrect={false}
                        />
            </SafeAreaView>
              <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Memory')}>
                <Memory_card/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Memory')}>
                <Memory_card/>
              </TouchableOpacity>

              
                
              </ScrollView>
              
  
             
                  
          </View>
      );
  
  }
  
  const styles = StyleSheet.create({
      container: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent:"center",
          height: 844,
          backgroundColor: '#F5F5F5'
      
        },
        card:{
          alignSelf: "center",
          marginTop:16
        },

        search:{
          width:354,
          height:32,
          borderWidth:2,
          borderColor: '#ccc',
          borderRadius:16,
          marginTop:8,
          marginBottom: 8,
          alignSelf:"center",
          backgroundColor: "#fff",
          paddingLeft: 35,
      
        },
  
        header:{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'space-between',
          marginLeft: 14,
          verticalAlign: 'middle',
          width:390,
          marginBottom: 0
        },
      
        header_row:{
          display: 'flex',
          flexDirection: 'row',
        },
      
        icon_header:{
          width: 40,
          height: 40,
          marginRight: 50, 
          marginTop: -5,
      
        },
      
        title:{
          fontSize: 20,
          fontWeight: 600,
          color: '#06648E',
        },
  
        
        
  })
  
  export default Memory_list