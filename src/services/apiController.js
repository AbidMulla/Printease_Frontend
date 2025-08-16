import axios from 'axios';

// Base API URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - adds auth token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handles common errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (!response) {
      console.error('Network/Server Error', error);
      alert('Something went wrong. Please try again later.');
      return Promise.reject(error);
    }

    const status = response.status;

    switch (status) {
      case 400:
        console.warn('Validation Error:', response.data);
        alert(response.data?.message || 'Validation failed. Please check your input.');
        break;

      case 401:
        console.warn('Unauthorized:', response.data);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
        break;

      case 403:
        console.warn('Forbidden:', response.data);
        alert('You do not have permission to perform this action.');
        break;

      case 404:
        console.warn('Not Found:', response.data);
        alert(response.data?.message || 'Requested resource not found.');
        break;

      default:
        if (status >= 500) {
          console.error('Server Error:', response.data);
          alert('Server error occurred. Please try again later.');
        }
        break;
    }

    return Promise.reject(error);
  }
);

// API Controller with common HTTP methods
const apiController = {
  // GET request
  get: async (endpoint, params = {}, customConfig = {}) => {
    try {
      const response = await axiosInstance.get(endpoint, {
        params,
        ...customConfig,
      });
      return response.data;
    } catch (error) {
      console.error('GET Error:', error);
      throw error;
    }
  },

  // POST request
  post: async (endpoint, data = {}, customConfig = {}) => {
    try {
      const response = await axiosInstance.post(endpoint, data, customConfig);
      return response.data;
    } catch (error) {
      console.error('POST Error:', error);
      throw error;
    }
  },

  // PUT request
  put: async (endpoint, data = {}, customConfig = {}) => {
    try {
      const response = await axiosInstance.put(endpoint, data, customConfig);
      return response.data;
    } catch (error) {
      console.error('PUT Error:', error);
      throw error;
    }
  },

  // PATCH request
  patch: async (endpoint, data = {}, customConfig = {}) => {
    try {
      const response = await axiosInstance.patch(endpoint, data, customConfig);
      return response.data;
    } catch (error) {
      console.error('PATCH Error:', error);
      throw error;
    }
  },

  // DELETE request
  delete: async (endpoint, customConfig = {}) => {
    try {
      const response = await axiosInstance.delete(endpoint, customConfig);
      return response.data;
    } catch (error) {
      console.error('DELETE Error:', error);
      throw error;
    }
  },

  // File upload
  upload: async (endpoint, formData, onProgress = null, customConfig = {}) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        ...customConfig,
      };

      // Add progress tracking if provided
      if (onProgress) {
        config.onUploadProgress = (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(percentCompleted);
        };
      }

      const response = await axiosInstance.post(endpoint, formData, config);
      return response.data;
    } catch (error) {
      console.error('Upload Error:', error);
      throw error;
    }
  },

  // Download file
  download: async (endpoint, params = {}, fileName = 'download', customConfig = {}) => {
    try {
      const config = {
        params,
        responseType: 'blob',
        ...customConfig,
      };

      const response = await axiosInstance.get(endpoint, config);
      
      // Create file download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      
      // Use content-disposition header filename if available
      const contentDisposition = response.headers['content-disposition'];
      const fileNameFromHeader = contentDisposition
        ? contentDisposition.split('filename=')[1].replace(/"/g, '')
        : fileName;
      
      link.setAttribute('download', fileNameFromHeader);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      return true;
    } catch (error) {
      console.error('Download Error:', error);
      throw error;
    }
  },

  // Cancel requests
  cancelToken: () => {
    const source = axios.CancelToken.source();
    return source;
  },

  // Handle pagination
  getPaginated: async (endpoint, page = 1, limit = 10, params = {}, customConfig = {}) => {
    try {
      const paginatedParams = {
        ...params,
        page,
        limit,
      };
      
      const response = await axiosInstance.get(endpoint, {
        params: paginatedParams,
        ...customConfig,
      });
      
      return response.data;
    } catch (error) {
      console.error('Pagination Error:', error);
      throw error;
    }
  },

  // Batch requests
  batch: async (requests) => {
    try {
      // Convert requests array to axios Promise array
      const requestPromises = requests.map(req => {
        const { method = 'get', url, data, config = {} } = req;
        return axiosInstance[method.toLowerCase()](url, data, config);
      });
      
      const responses = await Promise.all(requestPromises);
      return responses.map(response => response.data);
    } catch (error) {
      console.error('Batch Request Error:', error);
      throw error;
    }
  }
};

export default apiController;