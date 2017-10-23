// eslint-disable-next-line import/prefer-default-export
export const isProd = process.env.NODE_ENV === 'production'
const baseItemUrl = 'https://hacker-news.firebaseio.com/v0/item/'
const baseApiUrl = 'https://hacker-news.firebaseio.com/v0/'
const itemExt = '.json'
const apiExt = 'stories.json'
export const getItemUrl = item => baseItemUrl + item + itemExt
export const getStoriesUrl = category => baseApiUrl + category + apiExt
export const getLocalTime = utcSeconds => new Date(utcSeconds).toString()
