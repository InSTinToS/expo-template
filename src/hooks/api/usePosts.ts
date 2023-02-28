import axios from 'axios'
import { useQuery } from 'react-query'

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return data
}

const usePosts = () => useQuery('posts', fetchPosts)

export default usePosts
