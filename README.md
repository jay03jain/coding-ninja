# coding-ninja

![Figma Design](https://www.figma.com/proto/xFXtJoNm8CzlE1Y8kNPgw6/Untitled?node-id=7-510&p=f&t=hepRnf8y4EGtrbBE-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A510)

# Adverse Medical Event Prediction

## Overview
Adverse Medical Event Prediction is a system that processes emergency phone call recordings to detect potential adverse medical events. It transcribes audio, analyzes symptoms, and provides AI-powered suggestions.

## Features
 *Voice-to-Text Conversion*: Uses Whisper AI to transcribe emergency calls.  
 *Patient Data Handling*: Stores patient history in an SQLite database.  
 *AI-Powered Medical Suggestions*: Uses OpenAI's ChatGPT API to provide emergency recommendations.  
 *User-Friendly Web Interface*: Built with React for smooth interaction.  
 *Flask Backend*: Handles API requests and processes data efficiently.  

## Tech Stack
- *Frontend*: React.js, Axios  
- *Backend*: Flask, Flask-CORS  
- *AI Models*: OpenAI GPT-4 Turbo, Whisper AI  
- *Database*: SQLite  
