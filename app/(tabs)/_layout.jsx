import React from 'react';
import { Tabs } from 'expo-router';
import { View } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';

const TabIcon = ({ name, color, size }) => {
    return ( 
        <Ionicons
          name = {name}
          color = {color}
          size = {size}
        />
    )
}

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveBackgroundColor: '#ff8040', tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon : () => {
            <TabIcon
              name = 'home'
              color = '#f7dad9'
              size = '20px'
            />
          }
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon : () => {
            <TabIcon
              name = 'user'
              color = '#4F8EF7'
              size = '20px'
            />
          }
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon : () => {
            <TabIcon
              name = 'setting'
              color = '#4F8EF7'
              size = '20px'
            />
          }
        }}
      />
    </Tabs>
  )
}
export default TabLayout