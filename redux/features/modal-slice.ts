import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
    isOpen: boolean,
}

const initialState = {
    isOpen: false,
} as InitialState

export const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;