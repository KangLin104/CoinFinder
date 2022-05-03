import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeader = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'f5b9338518mshae9b813eb6e7095p13785bjsn9c77c585a67c'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeader})

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi', 
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder ) => ({
      getCryptosNews: builder.query({
          query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      })
  })

})

export const {
    useGetCryptosNewsQuery,
} = cryptoNewsApi;
