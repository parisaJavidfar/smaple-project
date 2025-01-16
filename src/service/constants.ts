const API_BASE_URL = "https://api.coincap.io/v2";

const ENDPOINTS = {
  COINS: `${API_BASE_URL}/assets`,
  HISTORY: `${API_BASE_URL}/assets/:id/history`,
};

export { API_BASE_URL, ENDPOINTS };
