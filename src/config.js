require("dotenv").config();

const REACT_APP_BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BASE_URL_PROD
    : process.env.REACT_APP_BASE_URL_LOCAL;

const config = {
  REACT_APP_BASE_URL:
    REACT_APP_BASE_URL || "https://quiet-gorge-71347.herokuapp.com",
};

export default config;
