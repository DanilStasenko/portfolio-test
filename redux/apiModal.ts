import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface IModal {
    data: {
        id: number;
        attributes: {
            text: string;
            createdAt: string;
            updatedAt: string;
        }
    };
    meta: {}
}

export const modalApi = createApi({
    reducerPath: 'modalApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://95.163.229.14:1337/api/'}),
    endpoints: (build) => ({
        getModalContent: build.query<IModal, void>({
            query: () => 'modal'
        })
    })
})

export const {useGetModalContentQuery} = modalApi;