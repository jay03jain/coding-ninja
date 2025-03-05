# database.py (Store Patient History)
import sqlite3

def create_db():
    conn = sqlite3.connect("patients.db")
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY,
        name TEXT,
        age INTEGER,
        conditions TEXT
    )""")
    conn.commit()
    conn.close()

def get_patient(name):
    conn = sqlite3.connect("patients.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM patients WHERE name=?", (name,))
    result = cursor.fetchone()
    conn.close()
    return result
