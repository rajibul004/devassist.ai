import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API;

// LOGIN
export const loginUser = async (loginData) => {
  const response = await axios.post(`${BASE_URL}/public/signin`, loginData);

  const token = response.data.token;

  if (token) {
    localStorage.setItem("token", token);

    // notify Navbar
    window.dispatchEvent(new Event("authChange"));
  }

  return response.data;
};

// SIGNUP
export const signupUser = async (signupData) => {
  const response = await axios.post(`${BASE_URL}/public/signup`, signupData);
  console.log("signupUser response:", response.data);

  return response.data;
};
