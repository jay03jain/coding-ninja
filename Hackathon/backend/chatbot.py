import openai
import os
from dotenv import load_dotenv

load_dotenv()  # Load API keys from .env file
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

def get_medical_suggestion(patient_info, symptoms):
    prompt = f"""
    You are a medical AI assisting emergency call center agents.
    - Patient Info: {patient_info}
    - Symptoms: {symptoms}

    Provide step-by-step medical advice until paramedics arrive.
    """
    response = openai.ChatCompletion.create(
        model="gpt-4-turbo",
        messages=[
            {"role": "system", "content": "You are a medical assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return response["choices"][0]["message"]["content"]
