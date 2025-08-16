import { GET, POST, PUT, DELETE } from '@/controllers/appController';


/* ===========================================
   📊 ADMIN DASHBOARD
   =========================================== */

// 👉 Fetch dashboard stats or summary for admin
export const getAdminDashboardAPI = () => {
  return GET('/admin/dashboard');
};


/* ===========================================
   👥 USER MANAGEMENT (Admin)
   =========================================== */

// 👉 Get list of all users
export const getAllUsersAPI = () => {
  return GET('/admin/users');
};

// 👉 Get user details by ID
export const getUserByIdAPI = (userId) => {
  return GET(`/admin/users/${userId}`);
};

// 👉 Create a new user
export const createUserAPI = (data) => {
  return POST('/admin/users', data);
};

// 👉 Update user details by ID
export const updateUserByIdAPI = (userId, data) => {
  return PUT(`/admin/users/${userId}`, data);
};

// 👉 Delete user by ID
export const deleteUserByIdAPI = (userId) => {
  return DELETE(`/admin/users/${userId}`);
};
