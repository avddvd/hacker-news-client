import 'isomorphic-fetch'
import 'async'

import { getItemUrl, getStoriesUrl } from '../shared/util'

export const homePage = () => null

export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})

export const helloEndpoint = num => ({
  serverMessage: `Hello from the server! (received ${num})`,
})

export const getStories = async (category) => {
  const response = await fetch(getStoriesUrl(category), { method: 'GET' })
  const data = await response.json()
  const items = data.slice(0, 30)
  const fetchItems = items.map(item => fetch(getItemUrl(item), { method: 'GET' }))
  const responses = await Promise.all(fetchItems)
  const stories = await Promise.all(responses.map(res => res.json()))
  return stories
}
