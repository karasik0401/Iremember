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
  
  
  function Friends_page({ navigation }) {
      const [number, onChangeNumber] = React.useState('');
    
      return (
          <View style={styles.container}>
              
              <View style={styles.header}>
                <View style={styles.header_row}>
                  <IconButton style={styles.icon_header} onPress={() => navigation.navigate('Profile')}  icon={props => <Icon   name="arrow-left" {...props} color="#06648E"/>} />
                  <Text style={styles.title}>Друзья</Text>
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

              <View style={styles.zaiavki}>
                <Text style={styles.zaiavki_title}>Заявки в друзья</Text>
                <View style={styles.zaiavki_count}>
                    <Text style={styles.count}>10</Text>
                </View>
             </View>

             <View style={styles.line}></View>

                <View style={styles.person}>
                    <View style={styles.person_row}> 
                    <Image
                        style={styles.photo}
                        source={require('../../logo/Profile.png')}
                        />
                        <Text style={styles.name}>Петров Борис</Text>
                    </View>
                    <IconButton style={styles.icon_person} icon={props => <Icon name="close-circle" {...props} color="#06648E" size={24}/>} />
             </View>
             <View style={styles.person}>
                    <View style={styles.person_row}> 
                    <Image
                        style={styles.photo}
                        source={require('../../logo/Profile.png')}
                        />
                        <Text style={styles.name}>Петров Борис</Text>
                    </View>
                    <IconButton style={styles.icon_person} icon={props => <Icon name="close-circle" {...props} color="#06648E" size={24}/>} />
             </View>
             <View style={styles.person}>
                    <View style={styles.person_row}> 
                    <Image
                        style={styles.photo}
                        source={require('../../logo/Profile.png')}
                        />
                        <Text style={styles.name}>Петров Борис</Text>
                    </View>
                    <IconButton style={styles.icon_person} icon={props => <Icon name="close-circle" {...props} color="#06648E" size={24}/>} />
             </View>
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

        line:{
            width: '100%',
            height: 1,
            backgroundColor: "#A3A6AA",

        },
        zaiavki_title:{
            size: 16,
            fontWeight: '400',
            color: "#333333"
        },
        zaiavki_count:{
            backgroundColor: "#06648E",
            borderRadius: 30,
            paddingHorizontal: '2%',
        },
        count:{
            color: '#fff',
            size: 18,
            alignSelf: "center",
            verticalAlign:"middle"
        },
        photo:{
            width: 40,
            height: 40,
            marginRight: 16
            
        },
        person:{
            display: 'flex',
            flexDirection:"row",
            justifyContent:"space-between",
            marginLeft: 24,
            width: 342,
            verticalAlign: 'middle',
            marginTop: 22,
            
        },

        zaiavki:{
            display: 'flex',
            flexDirection:'row',
            gap: 16,
            marginLeft: 24,
            marginVertical: 20,
        },

        person_row:{
            display: 'flex',
            flexDirection:'row',

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
        
          icon:{
            width: 24,
            height: 24,
            backgroundColor: "#000",
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
          marginRight: 111, 
          marginTop: -5,
      
        },

        icon_person:{
          width: 40,
          height: 40,
          marginRight: -10,
        },
        name:{
            fontSize: 16,
            fontWeight: '400',
            color: '#06648E',
            marginTop: 10,
            
          },
      
        title:{
          fontSize: 20,
          fontWeight: '600',
          color: '#06648E',
          
        },
  
        
        
  })
  
  export default Friends_page