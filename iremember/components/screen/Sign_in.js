import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, Image, View, TextInput,Button,Pressable, Alert, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

function Sign_in({navigation}) {

    const [userData, setUserData] = React.useState({});


    
    

    const onChangeInput = (e, name) => {
        setUserData({
          ...userData,
          [name]: e.nativeEvent.text,
        });
      };

      
      

  return (
    
    <KeyboardAvoidingView behavior="padding" >
      <LinearGradient colors={['#005B88', '#54C2CC']} style={styles.container}>
        
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <Image
        style={styles.stretch}
        source={require('../../logo/LogoIrem.png')}
      />
        <Text style={styles.text}>Создавай свои воспоминания с нами</Text>
        <View>
        <TextInput
        style={styles.Login}
        onChange={e => onChangeInput(e)}
        placeholder="Логин"
        type="text"
        placeholderTextColor="#828282"
        id = {1}
        />
        
        <TextInput
        style={styles.Mail}
        secureTextEntry={true}
        onChange={e => onChangeInput(e)}
        placeholder="Пароль"
        placeholderTextColor="#828282"
        id = {2}
        />
        
        <View style={styles.btnContainer}>
          
        
        <LinearGradient colors={['#1092A9','#0E6F8B' ]} style={styles.btn}>
          <Pressable  onPress={() => navigation.navigate('Home_page')}>
            <Text style={styles.btn_text}>Войти</Text>
          </Pressable>
        </LinearGradient>
          
        

        <View style={styles.lines}>
            <View style={styles.left_lines}></View>
            <Text style={styles.and}>или</Text>
            <View style={styles.right_lines}></View>
        </View>

        <View style={styles.footer}>
            <Text style={styles.footer_text}>Нет аккаунта?</Text>
            <View style={styles.footer_btn}>
              <Button
              title="Зарегистрироваться"
              color="#015C89"
              onPress={() => navigation.navigate('Sign_up')}
            />  
            </View>
            
        </View>
        </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      </LinearGradient>
        
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 844,
    
  },

  and:{
    color: "#D2E7EC"
  },

  body:{
    width: 390,
  },
  text: {
    marginTop: 45,
    fontSize: 18,
    color: '#F2F3F3',
  },
  Login: {
    marginTop: 50,
    height: 52,
    width: 318,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "#D0E5EB",
    borderColor: "#C1C1C1",
    color:"#7BA8BF",
    padding: 10,
    borderRadius: 10,
  },
  Mail: {
    marginTop: 27,
    height: 52,
    width: 318,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "#D0E5EB",
    borderColor: "#C1C1C1",
    color:"#7BA8BF",
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    marginTop: 27,
    alignItems: 'center',
    justifyContent: 'center',
    width: 318,
    height: 52,
    borderRadius: 15,
    backgroundColor: '#CDDCA1',
    marginLeft:12    
  },
  btn_text:{
    fontSize: 20,
    color: '#FFFFFF',
    paddingBottom: 5,
    fontWeight: '600'
  },
  lines:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 17,
  },
  left_lines: {
    width: 139.01,
    height: 1,
    backgroundColor: '#D2E7EC',
    marginTop:10,
    marginRight: 7
  },
  right_lines: {
    width: 139.01,
    height: 1,
    backgroundColor: '#D2E7EC',
    marginTop:10,
    marginLeft: 7,
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 17,
    marginLeft:12  
  },
  footer_text:{
    fontSize: 14,
    color: '#D2E7EC'
  },
  footer_btn:{
    marginTop: -11,
    
  }

})

export default Sign_in