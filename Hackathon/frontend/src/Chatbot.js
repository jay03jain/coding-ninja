import React, { useState } from "react";
import { transcribeAudio, getSuggestion } from "./api";
import { ReactMic } from "react-mic";

const Chatbot = () => {
  const [patientName, setPatientName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [response, setResponse] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const handleSubmit = async () => {
    if (!patientName || !symptoms) {
      alert("Please enter both patient name and symptoms.");
      return;
    }
    const suggestion = await getSuggestion(patientName, symptoms);
    setResponse(suggestion);
  };

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onData = (recordedBlob) => {
    console.log("Recording audio...", recordedBlob);
  };

  const onStop = async (recordedBlob) => {
    console.log("Recording stopped", recordedBlob);
    setAudioBlob(recordedBlob.blob);

    // Convert voice to text
    const formData = new FormData();
    formData.append("audio", recordedBlob.blob);
    const transcribedText = await transcribeAudio(formData);
    setSymptoms(transcribedText);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Emergency Medical Assistant</h1>
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full">
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={startRecording}
            className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition"
          >
            🎤
          </button>
          <button
            onClick={stopRecording}
            className="bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition"
          >
            ⏹
          </button>
        </div>

        <ReactMic
          record={isRecording}
          className="hidden"
          onStop={onStop}
          onData={onData}
          strokeColor="#FF0000"
          backgroundColor="#000000"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mt-3"
        >
          Get Medical Advice
        </button>

        {response && (
          <div className="mt-4 p-3 bg-gray-100 rounded-md border border-gray-300">
            <p className="text-gray-700 font-medium">💡 AI Suggestion:</p>
            <p className="text-gray-600">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
