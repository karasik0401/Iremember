import * as React from 'react'
import { StyleSheet, Text, Image, View,Button,Pressable, Alert, SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Memory from '../components/screen/Memory'
import Sign_in from '../components/screen/Sign_in'
import Sign_up from '../components/screen/Sign_up'
import Home_page from '../components/screen/Home_page';
import Profile from '../components/screen/Profile';
import Memory_list from '../components/screen/Memory_list';
import Memory_card from '../components/widget/Memory_card';
import Memory_post from '../components/widget/Memory_post';


const Stack = createStackNavigator()

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
          name='Memory'
          component={Memory}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />
    <Stack.Screen
          name='Home_page'
          component={Home_page}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />
      <Stack.Screen
          name='Profile'
          component={Profile}
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
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainStackNavigator