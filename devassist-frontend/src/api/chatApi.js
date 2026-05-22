import apiClient from "./apiClient";

export const sendMessage = async (message) => {
  const response = await apiClient.post("/public/chat", {
    message,
    email: localStorage.getItem("email"),
  });
  

  return response.data;
};
