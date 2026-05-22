import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const loginUser = async (loginData) => {
  const response = await axios.post(`${BASE_URL}/public/signin`, loginData);

  return response.data;
};

export const signupUser = async (signupData) => {
  const response = await axios.post(`${BASE_URL}/public/signup`, signupData);

  return response.data;
};
