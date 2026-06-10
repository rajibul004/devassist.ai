import apiClient from "./apiClient";

export const sendMessage = async (message) => {
  const response = await apiClient.post("/public/chat", {
    message,
    email: localStorage.getItem("email"),
  });

  return response.data;
};

export const downloadPdf = async (message) => {
  const response = await apiClient.post(
    "/pdf/download",
    {
      explanation: message.explanation || "",
      suggestedFix: message.suggestedFix || "",
    },
    {
      responseType: "blob",
    },
  );

  const fileUrl = window.URL.createObjectURL(
    new Blob([response.data], { type: "application/pdf" }),
  );

  const link = document.createElement("a");

  link.href = fileUrl;

  link.download = "debug-report.pdf";

  document.body.appendChild(link);

  link.click();

  link.remove();
};
