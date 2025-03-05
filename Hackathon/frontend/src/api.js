import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

export const transcribeAudio = async (audioFile) => {
    const formData = new FormData();
    formData.append("audio", audioFile);
    const response = await axios.post(`${API_URL}/transcribe`, formData);
    return response.data.transcribed_text;
};

export const getSuggestion = async (patientName, symptoms) => {
    const response = await axios.post(`${API_URL}/suggestion`, {
        patient_name: patientName,
        symptoms: symptoms
    });
    return response.data.suggestion;
};
