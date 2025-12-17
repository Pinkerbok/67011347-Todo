// frontend/src/config.js
// Centralized config - reads env vars once, exports simple names
// NOTE: REACT_APP_API_URL must be set in frontend/.env

const config = {
    API_URL: process.env.REACT_APP_API_URL,
};

export default config;
