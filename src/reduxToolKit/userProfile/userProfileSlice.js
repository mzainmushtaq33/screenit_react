import { userProfileService } from "./userProfileService";

import { createSlice } from '@reduxjs/toolkit'
// import { api, User } from '../../app/services/auth'
// import type { RootState } from '../../app/store'


const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: { userInfo: {}},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
        userProfileService.endpoints.getUserInfo.matchFulfilled,
      (state, { payload }) => {
        // state.userInfo = payload
      }
    )
  },
})

export default userProfileSlice.reducer

// export const selectCurrentUser = (state: RootState) => state.auth.user
