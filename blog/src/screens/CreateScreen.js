import React, { useContext } from 'react'
import { View } from 'react-native'

import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost, state } = useContext(Context)
  // console.log('CreateScreen state - ', state)
  return (
    <View>
      <BlogPostForm
        screen='Create'
        onSubmit={(title, content) => {
          if (title !== '' && content !== '') {
            addBlogPost(title, content, () => navigation.navigate('Index'))
            // console.log('CreateScreen onsubmit state: ', state)
          }
          console.log('Title and Content must have data!')
        }}
      />
    </View>
  )
}

CreateScreen.navigationOptions = () => {
  return {
    title: 'Create Blog',
  }
}

export { CreateScreen }
