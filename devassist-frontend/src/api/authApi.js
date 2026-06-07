import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API;

export const loginUser = async (loginData) => {
  const response = await axios.post(`${BASE_URL}/public/signin`, loginData);

  return response.data;
};

export const signupUser = async (signupData) => {
  const response = await axios.post(`${BASE_URL}/public/signup`, signupData);

  return response.data;
};
