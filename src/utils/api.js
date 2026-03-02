import axios from 'axios';

const localurl = 'http://localhost:5000'
const cloudurl = ''

const api = axios.create({
  baseURL: '/',
  baseURL: 'https://dreaminalgo-edubackend-production.up.railway.app',

  withCredentials: true, // 🍪 cookies auto sent
  headers: {
    'Content-Type': 'application/json',
  },
});

/* ===========================
   REFRESH ACCESS TOKEN
=========================== */
const refreshAccessToken = async () => {
  try {
    await api.post('/api/auth/refresh');
    return true;
  } catch (err) {
    return false;
  }
};

/* ===========================
   GENERIC API REQUEST
=========================== */
export const apiRequest = async (
  method,
  endpoint,
  data,
  retry = true // ⛔ retry only once
) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      ...(method.toUpperCase() === 'GET' ? { params: data } : { data }),
    });

    return response.data;
  } catch (error) {
    // 🔐 Access token expired
    if (
      error.response?.status === 401 &&
      retry
    ) {
      const refreshed = await refreshAccessToken();

      if (refreshed) {
        // 🔁 retry original request ONCE
        return apiRequest(method, endpoint, data, false);
      }

      // ❌ refresh failed → logout
      // Prevent infinite loop if already on login/signup page
      if (!window.location.pathname.includes('/auth/')) {
        window.location.href = '/auth/login';
      }
      throw new Error('Session expired');
    }

    throw new Error(
      error.response?.data?.message || 'Something went wrong'
    );
  }
};

export default api;
