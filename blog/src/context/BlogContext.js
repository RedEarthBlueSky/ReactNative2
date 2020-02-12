import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

// I want to see the state


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id
        ? action.payload
        : blogPost
      })
    case 'delete_blogpost':
      return state.filter((blogPost) => {
        return blogPost.id !== action.payload
      })
    // case 'add_blogpost':
    //   return [...state, {
    //     title: action.payload.title,
    //     id: Math.floor(Math.random() * 9999999),
    //     content: action.payload.content
    //   }]
    default:
      return state
  }
}

// inside action creator functions include request for data
const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    // response = [{}, {}, {}...]
    dispatch({ type: 'get_blogposts', payload: response.data })
  }
}

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    // add post to database
    await jsonServer.post('/blogposts', { title, content })
    // update local state with new post
    // dispatch({ type: 'add_blogpost', payload: { title, content } })
    if (callback) callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return async id => {
    // remove post from db
    await jsonServer.delete(`/blogposts/${id}`)
    // remove post from local state
    dispatch({ type: 'delete_blogpost', payload: id })
    //  this is a weird one, state is returned from db but only after
    //  we click to create another blog.
  }
}

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    // update the database
    await jsonServer.put(`/blogposts/${id}`, { title, content })

    //  update local state
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
    if (callback) callback()
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
)
