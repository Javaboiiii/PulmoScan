import { View, Text } from 'react-native'
import { Link } from 'react-router'
import React from 'react'

const MyLink = ({ children }) => {
  return (
    <Link style ={
        {
            fontWeight: 600, 
            fontSize: 15
        }
    }>{ children }</Link>
  )
}

export default MyLink