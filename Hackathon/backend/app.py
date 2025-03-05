from flask import Flask, request, jsonify
from flask_cors import CORS
from transcriber import transcribe_audio
from chatbot import get_medical_suggestion
from database import get_patient

app = Flask(__name__)
CORS(app)  # Allow frontend to communicate with backend

@app.route('/transcribe', methods=['POST'])
def transcribe():
    """Handles audio transcription requests"""
    file = request.files["audio"]
    file_path = "temp.wav"
    file.save(file_path)
    
    text = transcribe_audio(file_path)
    return jsonify({"transcribed_text": text})

@app.route('/suggestion', methods=['POST'])
def suggestion():
    """Handles AI-based medical suggestions"""
    data = request.json
    patient_name = data["patient_name"]
    symptoms = data["symptoms"]

    patient_info = get_patient(patient_name)
    if not patient_info:
        patient_info = "Unknown patient history."

    suggestion = get_medical_suggestion(patient_info, symptoms)
    return jsonify({"suggestion": suggestion})

if __name__ == "__main__":
    app.run(debug=True)
