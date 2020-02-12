import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from './src/context/BlogContext'

import { CreateScreen, EditScreen, IndexScreen, ShowScreen } from './src/screens'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Create: CreateScreen,
    Show: ShowScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog List'
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
     <Provider>
      <App />
     </Provider>
  )
}
