import axios from "axios";

export const sendEmail = async (formData) => {
  try {
    const response = await axios.post("/api/send-email", formData);
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
