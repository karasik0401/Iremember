import {
    StyleSheet,
    Text,
    View, ScrollView, Image, TouchableOpacity,Button,FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard
  } from 'react-native';
  import { StatusBar } from "expo-status-bar";
  import React, { useState } from 'react';
  import { Stack, IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
  import DateTimePickerModal from "react-native-modal-datetime-picker";
  
  
  function AddMemory({ navigation }) {
      const [number, onChangeNumber] = React.useState('');
      const [userData, setUserData] = React.useState({});
      const [date, setDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const getDateOfBirth = () => {
    let newDate = new Date(date).toLocaleDateString();
    console.log(newDate) // 4/15/2022
    return date !== "" ? newDate : "";
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

    const onChangeInput = (e, name) => {
        setUserData({
          ...userData,
          [name]: e.nativeEvent.text,
        });
      };
    
    return (
        <View style={styles.container}>  
            <View style={styles.header_column}>

                <TextInput
                style={styles.title}
                onChange={e => onChangeInput(e)}
                placeholder="Название"
                type="text"
                placeholderTextColor="#828282"
                id = {1}
                />

                <TextInput
                style={styles.address}
                onChange={e => onChangeInput(e)}
                placeholder="Адрес"
                multiline={true}
                type="text"
                dataDetectorTypes = 'address'
                placeholderTextColor="#828282"
                id = {2}
                />

                <TouchableOpacity
                onPress={showDatePicker}
                style={styles.btnDate}
                activeOpacity={0.8}
                >
                    <Text style={styles.btnDateTitle}>Select Date of Birth</Text>
                </TouchableOpacity>

                <DateTimePickerModal
                style={styles.date}
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                />

<TextInput
        style={styles.textInput}
        value={getDateOfBirth()}
        placeholder="Select Date of Birth"
   />
                         
            </View>
              
  
              
            <View style={styles.footer}> 
                <IconButton style={styles.btn}  onPress={() => navigation.navigate('Memory')} icon={props => <Icon  name="plus" {...props} color="#FEFEFE"/>} />  
            </View>

                  
        </View>
    );
  
  }
  
  const styles = StyleSheet.create({
      container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: 844,
          backgroundColor: '#F5F5F5'
      
        },
  
        
  
        header_column:{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 200,
        },
        
        
  
        btn:{
          width: 183,
          height: 32,
          backgroundColor: "#06648E",
          borderRadius: 28,
          alignSelf: 'center',
          
        },
  
        
  
        footer:{
          position: 'absolute',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 790,
             },
  
          icon_footer:{
          width: 30,
          height: 30,
          borderRadius: 50,
  
        },
        
  })
  
  export default AddMemory