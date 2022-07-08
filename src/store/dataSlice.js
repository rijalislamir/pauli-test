import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        startTime: null,
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10),
        history: [],
        limit: null
    },
    reducers: {
        startTest(state, action) {
            state.startTime = +new Date()
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
        },
        resetData(state, action) {
            state.startTime = null
            state.num1 = Math.floor(Math.random() * 10)
            state.num2 = Math.floor(Math.random() * 10)
            state.history = []
            state.limit = null
        }
    }
})

export const {
    startTest,
    numpadPressed,
    resetData
} = dataSlice.actions
export default dataSlice.reducer