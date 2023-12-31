import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "receptionlist",
    initialState: {
        value: [ ]
    },
    reducers: {
        addReception : (state, action) => {
            state.value = action.payload
        },
        updateReception : (state, action) => {
            state.value = action.payload
        },
        
        changeReception: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addReception, changeReception , updateReception } = slice.actions
export default slice.reducer