import * as React from 'react'
import { StyleSheet, Text, Image, View,Button,Pressable, Alert, SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Memory from '../components/screen/Memory'
import Sign_in from '../components/screen/Sign_in'
import Sign_up from '../components/screen/Sign_up'
import Home_page from '../components/screen/Home_page';
import Profile from '../components/screen/Profile';
import Memory_list from '../components/screen/Memory_list';
import Memory_card from '../components/widget/Memory_card';
import Memory_post from '../components/widget/Memory_post';
import Header_home from '../components/widget/Header_home';
import Friends_page from "../components/screen/Friends_page"
import { Icon } from '@react-native-material/core';
import Btn from '../components/widget/Btn';
import AddMemory from '../components/screen/AddMemory';
import AddFriends from '../components/widget/AddFriends';
import AddMemoryPost from '../components/screen/AddMemoryPost';


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

function Root() {
  return (
    
    <Drawer.Navigator initialRouteName="Home_page" style={styles.drawer} >
        <Drawer.Screen name="Home_page" component={Home_page} options={{title: 'Главная',
          headerShown: false,
          headerLeft: () => null,}}/>
        <Drawer.Screen name="Profile" component={Profile} options={{title: 'Профиль',
          headerShown: false,
          headerLeft: () => null,}}/>
        <Drawer.Screen name="Memory_list" component={Memory_list} options={{title: 'Мои воспомиания',
          headerShown: false,
          headerLeft: () => null,}}/>
        <Drawer.Screen name="Friends_page" component={Friends_page} options={{title: 'Друзья',
          headerShown: false,
          headerLeft: () => null,}}/>
      </Drawer.Navigator>
  );
}

function MainStackNavigator() {

  
  return (
    <NavigationContainer>
    <Stack.Navigator>



    <Stack.Screen
          name='Sign_in'
          component={Sign_in}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />
    <Stack.Screen
          name='Sign_up'
          component={Sign_up}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />

    <Stack.Screen
          name='Root'
          component={Root}
          options={{ headerShown: false }}
        />

    <Stack.Screen
          name='Btn'
          component={Btn}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />


    <Stack.Screen
          name='Memory'
          component={Memory}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />
    
<Stack.Screen
          name='Memory_list'
          component={Memory_list}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />
        <Stack.Screen
          name='Memory_card'
          component={Memory_card}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />

        <Stack.Screen
          name='Memory_post'
          component={Memory_post}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />
        <Stack.Screen
          name='Header_home'
          component={Header_home}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />
        <Stack.Screen
          name='AddMemory'
          component={AddMemory}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />

        <Stack.Screen
          name='AddFriends'
          component={AddFriends}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />

        <Stack.Screen
          name='AddMemoryPost'
          component={AddMemoryPost}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({

  drawer:{
    width: 257,
  }
})

export default MainStackNavigator