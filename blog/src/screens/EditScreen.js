import React, { useContext } from 'react'
import { View } from 'react-native'

import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state, editBlogPost } = useContext(Context)

  const blogPost = state.find((blogPost) => {
    return blogPost.id === id
  })

  return (
    <View>
      <BlogPostForm
        initialValues={{
          id: blogPost.id,
          title: blogPost.title,
          content: blogPost.content
        }}
        screen='Edit'
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => {
            navigation.pop()
          })
        }}
      />
    </View>
  )
}

EditScreen.navigationOptions = () => {
  return {
    title: 'Blog Edit',
  }
}

export { EditScreen }
