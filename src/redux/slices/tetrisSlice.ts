import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TetrisState {
    winners: any[];
}

const initialState: TetrisState = {
    winners: [],
}

export const tetrisSlice = createSlice({
    name: 'chat',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setLeaderboard: (state, action: PayloadAction<any>) => {
            state.winners = action.payload.result;
        }
    },
})

export const {
  setLeaderboard,
} = tetrisSlice.actions

export default tetrisSlice.reducer
