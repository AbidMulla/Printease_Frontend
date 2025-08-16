import { GET, PUT } from '@/controllers/appController';


// ===========================================
// 📊 USER DASHBOARD APIs
// ===========================================

// 👉 Fetch user dashboard data (stats, summary, etc.)
export const getDashboardAPI = () => {
  return GET('/user/dashboard');
};


// ===========================================
// 🙋 USER PROFILE APIs
// ===========================================

// 👉 Get current user profile information
export const getProfileAPI = () => {
  return GET('/user/profile');
};

// 👉 Update current user profile details
export const updateProfileAPI = (data) => {
  return PUT('/user/profile', data);
};
