// src/services/application.service.js
import api from "./api";

/**
 * Apply for career (with resume upload)
//  * @param {Form} form
 */
export const applyForCareer = async (Form) => {
  try {
    const response = await api.post("/career/apply", Form, {
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type" : "application/json"
      },
    });

    return response.form;
  } catch (error) {
    console.error("Career Application Error:", error.response?.data || error.message);
    throw error;
  }
};
