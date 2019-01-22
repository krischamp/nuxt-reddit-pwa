import axios from 'axios'
import { SUBREDDIT } from '~/constants'

export async function getNewPosts() {
  try {
    const { data } = await axios.get(`https://www.reddit.com/${SUBREDDIT}/new.json?sort=new`)
    return data.data.children.map((item) => (item.data))
  } catch (error) {
    handleApiError(error)
  }
}

export async function getComments(postId) {
  try {
    const { data } = await axios.get(`https://www.reddit.com/${SUBREDDIT}/comments/${postId}/.json`)
    const [[post], comments] = data.map((item) => {
      return item.data.children.map((comment) => (comment.data))
    })
    return {
      post,
      comments
    }
  } catch (error) {
    handleApiError(error)
  }
}

function handleApiError(error) {
  console.log('Something very bad happens')
}