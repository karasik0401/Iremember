import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View, TextInput,Button,Pressable, Alert, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Sign_up({navigation}) {
  
    const [userData, setUserData] = React.useState({});
    


    

    const onChangeInput = (e, name) => {
        setUserData({
          ...userData,
          [name]: e.nativeEvent.text,
        });
      };

      
      

    
  
  return (
    <LinearGradient colors={['#005B88', '#54C2CC']} style={styles.container}>

      <KeyboardAvoidingView behavior="padding">
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.text}>Регистрация</Text>

          <View>
            <TextInput
              style={styles.Login}
              onChange={e => onChangeInput(e)}
              placeholder="Логин"
              placeholderTextColor="#828282"
              type="text"
              id = {1}
            />
            <TextInput
              style={styles.Mail}
              onChange={e => onChangeInput(e)}
              placeholder="Почта"
              placeholderTextColor="#828282"
              id = {2}
              type='text'
              keyboardType='email-address'
            />
            <TextInput
              style={styles.Mail}
              secureTextEntry={true}
              textContentType={'password'}
              onChange={e => onChangeInput(e)}
              placeholder="Пароль"
              placeholderTextColor="#828282"
              id = {3}
            />
            <TextInput
              style={styles.Mail}
              secureTextEntry={true}
              textContentType={'password'}
              onChange={e => onChangeInput(e)}
              placeholder="Пароль еще раз"
              placeholderTextColor="#828282"
              id = {4}
            />
            <View style={styles.btnContainer}>
            <LinearGradient colors={['#1092A9','#0E6F8B' ]} style={styles.btn}>
          <Pressable  onPress={() => navigation.navigate('Root', { screen: 'Home_page' })}>
            <Text style={styles.btn_text}>Зарегистрироваться</Text>
          </Pressable>
        </LinearGradient>

              <View style={styles.lines}>
                <View style={styles.left_lines}></View>
                <Text style={styles.and}>или</Text>
                <View style={styles.right_lines}></View>
              </View>

              <View style={styles.footer}>
                <Text style={styles.footer_text}>Уже есть аккаунт?</Text>
                <View style={styles.footer_btn}>
                  <Button 
                    title="Войти"
                    color="#015C89"
                    size="sm"
                    onPress={() => navigation.navigate('Sign_in')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

        
        
    </KeyboardAvoidingView>
 </LinearGradient>

    

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
    color: "#F2F3F3"
  },

  text: {
    marginTop: 100,
    fontSize: 32,
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
    color:"#69A1BA",
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
    color:"#69A1BA",
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
    color: '#D0E5EB',
    paddingBottom: 5,
    fontWeight: "600"
  },
  lines:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 17,
  },
  left_lines: {
    width: 139.01,
    height: 1,
    backgroundColor: '#D0E5EB',
    marginTop:10,
    marginRight: 7
  },
  right_lines: {
    width: 139.01,
    height: 1,
    backgroundColor: '#D0E5EB',
    marginTop:10,
    marginLeft: 7,
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 17,
  },
  footer_text:{
    fontSize: 14,
    color: '#D0E5EB',
  },
  footer_btn:{
    marginTop: -11,
    
  }

})


export default Sign_up