import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import styles from './styles/componentStyles'

const BlogPostForm = (props) => {
  const { screen, onSubmit, initialValues } = props
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View>
      <Text style={{ marginTop: 10, marginLeft: 5 }}>{screen} Screen</Text>
      <Text style={[styles.h2, styles.label]}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={[styles.h2, styles.label]}>Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title={`Save ${screen}`}
        onPress={() => onSubmit(title, content)}
      />
    </View>
  )
}

//  react will check for default props
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
}

export default BlogPostForm
