import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10),
        history: [],
        limit: null
    },
    reducers: {
        setTimer(state, action) {
            state.limit = 1000 * 60 * action.payload.minutes
        },
        numpadPressed(state, action) {
            state.history.push({
                time: +new Date(),
                num1: state.num1,
                num2: state.num2,
                value: action.payload.value,
                isCorrect: ((state.num1 + state.num2) % 10 === action.payload.value)
            })

            state.num1 = state.num2

            state.num2 = Math.floor(Math.random() * 10)
        }
    }
})

export const {
    setTimer,
    numpadPressed
} = dataSlice.actions
export default dataSlice.reducer