import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const modalApi = createApi({
    reducerPath: 'modalApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://95.163.229.14:1337/api/'}),
    endpoints: (build) => ({
        getModalContent: build.query<any, void>({
            query: () => 'modal'
        })
    })
})

export const {useGetModalContentQuery} = modalApi;