import { GET, POST } from '@/controllers/appController';


// ===========================================
// 🔐 AUTHENTICATION & USER ACCESS APIs
// ===========================================


// 👉 Login user
export const loginApi = (data) => {
  return POST('/auth/login', data);
};

// 👉 Register new user
export const registerApi = (data) => {
  return POST('/auth/register', data);
};

// 👉 Logout current session
export const logoutApi = () => {
  return POST('/auth/logout');
};


// ===========================================
// 🔁 OTP VERIFICATION APIs
// ===========================================


// 👉 Verify OTP after registration or login
export const verifyOtpApi = (data) => {
  return POST('/auth/verify-otp', data);
};

// 👉 Resend OTP if user didn’t receive it
export const resendOtpApi = (data) => {
  return POST('/auth/resend-otp', data);
};


// ===========================================
// 🔑 PASSWORD RECOVERY APIs
// ===========================================


// 👉 Initiate forgot password process
export const forgotPasswordApi = (email) => {
  return POST('/auth/forgot-password', { email });
};

// 👉 Reset password using OTP/token
export const resetPasswordApi = (data) => {
  return POST('/auth/reset-password', data);
};


// ===========================================
// 🙋 USER INFO APIs
// ===========================================


// 👉 Get current logged-in user details
export const getMeApi = () => {
  return GET('/auth/me');
};
