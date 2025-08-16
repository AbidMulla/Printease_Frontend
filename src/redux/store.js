import { configureStore } from '@reduxjs/toolkit';

// Import slices
import adminSlice from './slices/adminSlice';
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    admin: adminSlice.reducer,
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
