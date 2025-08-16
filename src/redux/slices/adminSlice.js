import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adminData: null,
  isLoading: false,
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAdminData: (state, action) => {
      state.adminData = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setAdminError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearAdminData: (state) => {
      state.adminData = null;
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const { setAdminLoading, setAdminData, setAdminError, clearAdminData } = adminSlice.actions;

export default adminSlice;
