import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal-slice';
import { TypedUseSelectorHook } from 'react-redux/es/types';
import { useSelector } from 'react-redux';
import { modalApi } from './apiModal'; 
import { casesApi } from './apiCases';

export const store = configureStore({
    reducer: {
        modalReducer,
        [modalApi.reducerPath]: modalApi.reducer,
        [casesApi.reducerPath]: casesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(modalApi.middleware)    
        .concat(casesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;