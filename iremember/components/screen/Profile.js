import { StatusBar } from 'expo-status-bar';
import { IconButton, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React from 'react';


import { StyleSheet, Text, Image, View, ScrollView, Button,Pressable, Alert, SafeAreaView, } from 'react-native';



function Profile({ navigation }) {
      
    const [userState, setUserState] = React.useState({});

    

    

  return (

    <View style={styles.container}>
        

        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>

        

        <View style={styles.rec_one}>
            <View style={styles.header}>
                <View style={styles.header_row}>
                  <IconButton style={styles.icon_header} onPress={() => navigation.navigate('Home_page')}  icon={props => <Icon   name="arrow-left" {...props} color="#FEFEFE"/>} />
                  <Text style={styles.title}>Профиль</Text>
                </View>
              </View>
          <View style={styles.img}>
            <Image
              style={styles.photo}
              source={require('../../logo/Profile.png')}
            />
          </View>
          <Text style={styles.login}>Максим</Text>

          <Text style={styles.email}>#24</Text>

          <View style={styles.rec_t}>
            <Pressable style={styles.btn} >
            <Text style={styles.btn_text}>Редактировать профиль</Text>
            </Pressable>

            <Pressable style={styles.btn} onPress={() => navigation.navigate('Memory_list')}>
            <Text style={styles.btn_text}>Мои воспомианания</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => navigation.navigate('Friends_page')}>
            <Text style={styles.btn_text}>Друзья</Text>
            </Pressable>
        </View>

            <Pressable style={styles.btn_exit} onPress={() => navigation.navigate('Sign_in')}>
            <Text style={styles.btn_text_exit}>Выйти</Text>
            </Pressable>
        </View>
        
        
        
        </ScrollView>

        

        
        
 
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  }, 
  body:{
    zIndex: 1,
    
  },
  header:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
    marginLeft: 14,
    verticalAlign: 'middle'
  },

  header_row:{
    display: 'flex',
    flexDirection: 'row',
  },

  icon_header:{
    width: 40,
    height: 40,
    marginRight: 100, 
    marginTop: -5,

  },

  title:{
    fontSize: 20,
    fontWeight: 600,
    color: '#FEFEFE',
  },
  rec_one:{
    height: 374,
    width:393,
    marginTop: 0,
    backgroundColor:"#06648E",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  btn_exit:{
    marginTop: 283,
    alignSelf: "center",

  },

  btn_text_exit:{
    fontSize: 18,
    color:"#A3A6AA"
  },

  rec_t:{
    alignSelf: 'center',
    display: 'flex',
    alignContent: 'flex-start',
    height: 75,
    width: 287,
    marginTop: 47,

  },
  img:{
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: "#fff",
    marginTop: 6,
    alignSelf: "center"
  },

  login:{
    marginTop: 17,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 31,
    marginBottom:8,
    color:"#FEFEFE",
    alignSelf: "center"
  },
  email:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    color: '#A3A6AA',
    alignSelf: "center",
    marginTop:-10
  },

 

  icon:{
    alignSelf: 'center',
    marginLeft: 2,
    marginBottom: 2,
    transform: [{ rotate: '-90deg'}]
},
  btn: {
    marginBottom: 27,
  },
  btn_text:{
    fontSize: 20,
    color: '#333333',
    paddingBottom: 5,
    fontWeight:"500"
  },
  
})

export default Profile