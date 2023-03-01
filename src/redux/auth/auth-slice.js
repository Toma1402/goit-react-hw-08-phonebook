import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrentUser, logIn, logOut, register } from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = true;
      })
      .addCase(logIn.rejected, (state, action) => state)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = true;
      }),
  /* extraReducers: {
    [register.pending](state) {
      state.isLoggedIn = false;
    },
    [register.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [register.rejected](state) {
      state.isLoggedIn = false;
    },
    [logIn.pending](state) {
      state.isLoggedIn = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state) {
      state.isLoggedIn = false;
    },
    [logOut.pending](state) {
      state.isLoggedIn = false;
    },
    [logOut.fulfilled](state) {
      return (state = initialState);
    },
    [logOut.rejected](state) {
      state.isLoggedIn = true;
    },
    
  }, */
});
export const authReducer = authSlice.reducer;
