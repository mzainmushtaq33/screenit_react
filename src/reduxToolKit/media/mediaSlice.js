import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mediaType: '',
  }


  export const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
      getSelectedMedia: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.mediaType = action.payload
      },
    //   incrementByAmount: (state, action) => {
    //     state.value += action.payload
    //   },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { getSelectedMedia } = mediaSlice.actions
  
  export default mediaSlice.reducer