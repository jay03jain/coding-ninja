mkdir adverse_event_prediction
cd adverse_event_prediction
mkdir backend
cd backend
python -m venv venv
source venv/bin/activate  # (Windows: venv\Scripts\activate)
pip install flask openai openai-whisper sqlite3 flask-cors python-dotenv
touch app.py transcriber.py chatbot.py database.py requirements.txt .env
