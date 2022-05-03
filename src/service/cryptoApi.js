import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'


const cryptoAPiHeaders= {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f5b9338518mshae9b813eb6e7095p13785bjsn9c77c585a67c'
}

const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoAPiHeaders})


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', 
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder ) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timeperiod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    })

})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery,
} = cryptoApi;