import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  usersList: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setUsersList: (state, action) => {
      state.usersList = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    addUser: (state, action) => {
      state.usersList.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.usersList.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.usersList[index] = action.payload;
      }
      if (state.userData && state.userData.id === action.payload.id) {
        state.userData = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.usersList = state.usersList.filter(user => user.id !== action.payload);
    },
    setUserError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearUserData: (state) => {
      state.userData = null;
      state.error = null;
    },
  },
});

export const { 
  setUserLoading, 
  setUserData, 
  setUsersList, 
  addUser, 
  updateUser, 
  deleteUser, 
  setUserError, 
  clearUserData 
} = userSlice.actions;

export default userSlice;
