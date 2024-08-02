import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router'
import React from 'react'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className='text-2xl text-center'>Open The App.js and start editing now!!</Text>
      <Link href='/profile' className='text-center'>Go to Profile</Link>
      <StatusBar style="auto" />
    </View>
  )
}

export default index