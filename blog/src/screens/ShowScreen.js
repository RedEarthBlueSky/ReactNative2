import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { EvilIcons } from '@expo/vector-icons'
import { Context as BlogContext } from '../context/BlogContext'
import styles from './styles/screenStyles'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext)
  const id = navigation.getParam('id')

  const post = state.find(
    blogPost => blogPost.id === id
  )

  return (
    <View>
      <Text>Show Screen</Text>
      <Text style={styles.h2}>Title: {post.title}</Text>
      <Text>ID: {post.id}</Text>
      <Text style={styles.h2}>Content: {post.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Blog Detail',
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name='pencil' size={40} />
      </TouchableOpacity>
    )
  }
}

export { ShowScreen }
