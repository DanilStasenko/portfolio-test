import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { ICases } from "./models/ICases";

export const casesApi = createApi({
    reducerPath: 'casesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://95.163.229.14:1337/api/'}),
    endpoints: (build) => ({
        getAllCases: build.query<ICases, void>({
            query: () => 'portfolios/?populate=*'
        }),
        getSomeCases: build.query<ICases, number>({
            query: (start) => `portfolios/?populate=*&pagination[start]=${start}&pagination[limit]=2`
        })
    })
})

export const {useGetAllCasesQuery, useGetSomeCasesQuery} = casesApi;