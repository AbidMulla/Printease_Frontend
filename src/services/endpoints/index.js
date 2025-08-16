// 🌐 Centralized API Endpoints Configuration

const API_ENDPOINTS = {
  /* ===========================================
     🔐 AUTHENTICATION & USER ACCESS
     =========================================== */
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    VERIFY_OTP: '/auth/verify-otp',
    RESEND_OTP: '/auth/resend-otp',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    ME: '/auth/me',
  },

  /* ===========================================
     🙋 USER (Logged-in User)
     =========================================== */
  USER: {
    DASHBOARD: '/user/dashboard',
    PROFILE_GET: '/user/profile',
    PROFILE_UPDATE: '/user/profile',
  },

  /* ===========================================
     🛡️ ADMIN
     =========================================== */
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    USERS_LIST: '/admin/users',
    USER_DETAILS: (userId) => `/admin/users/${userId}`,
    USER_CREATE: '/admin/users',
    USER_UPDATE: (userId) => `/admin/users/${userId}`,
    USER_DELETE: (userId) => `/admin/users/${userId}`,
  },

  /* ===========================================
     🧑‍💼 SUPER ADMIN
     =========================================== */
  SUPER_ADMIN: {
    DASHBOARD: '/superadmin/dashboard',
    ADMINS_LIST: '/superadmin/admins',
    ADMIN_DETAILS: (adminId) => `/superadmin/admins/${adminId}`,
    ADMIN_CREATE: '/superadmin/admins',
    ADMIN_UPDATE: (adminId) => `/superadmin/admins/${adminId}`,
    ADMIN_DELETE: (adminId) => `/superadmin/admins/${adminId}`,
    SETTINGS_GET: '/superadmin/settings',
    SETTINGS_UPDATE: '/superadmin/settings',
  },
};

export default API_ENDPOINTS;
