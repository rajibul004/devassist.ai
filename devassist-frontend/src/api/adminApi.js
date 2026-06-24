import apiClient from "./apiClient";

export const getAllUsers = async () => {
  const response = await apiClient.get("/admin/users");

  return response.data;
};
