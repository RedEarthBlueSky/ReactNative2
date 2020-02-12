//  using the jsonserver folder
//  using json-server and ngrok as dummy api we
//  can persist data to, and retrieve data from
import axios from 'axios'

export default axios.create({
  // from ngrok, updates every eight hours
  baseURL: 'http://506c5305.ngrok.io'
})
