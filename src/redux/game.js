import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://game-api2.vercel.app/data' }),
  endpoints: (builder) => ({
    getgameByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
})


export const { useGetgameByNameQuery } = gameApi