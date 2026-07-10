# Chatbot Setup Guide - Groq AI

## Overview
The GAP application uses **Groq AI** (Llama 3.3 70B model) for the academic advisor chatbot. Groq provides incredibly fast inference and excellent reasoning capabilities.

## Features
- **GPA Improvement Tips**: Context-aware advice based on current performance
- **Study Strategies**: Time management and effective study techniques
- **Module-Specific Advice**: Guidance on specific courses
- **Career Guidance**: Career path suggestions based on GPA
- **Academic Regulations**: IAA policies and grading system explanations
- **Grading System Help**: Understanding the IAA grading scale

## Setup Instructions

### 1. Get Groq API Key
1. Go to [Groq Console](https://console.groq.com/keys)
2. Sign in with your account
3. Click "Create API Key"
4. Copy the generated key

### 2. Configure the Application
Create a `.env` file in the root directory (copy from `.env.example`):
```
VITE_GROQ_API_KEY=gsk_your_api_key_here
VITE_USE_MOCK_RESPONSES=false
```

### 3. Start the Application
```bash
npm run dev
```

## Why Groq AI?

### Advantages
- ✅ **Incredibly Fast**: Responses are generated in milliseconds
- ✅ **Powerful**: Uses the state-of-the-art Llama 3.3 70B Versatile model
- ✅ **Standard API**: Uses an OpenAI-compatible REST API, making integration simple
- ✅ **Context Aware**: The bot maintains conversation history and understands the student's current situation

## Usage

### Accessing the Chatbot
- Look for the floating chat button in the bottom-right corner
- Click to open the chat window
- Start asking questions!

### Example Questions
- "How can I improve my GPA from 3.2 to 4.0?"
- "What are good study strategies for IT modules?"
- "Can you explain the IAA grading system?"
- "What career paths are available with a GPA of 4.5?"
- "How should I prepare for exams?"
- "What happens if I get a D grade?"

### Context-Aware Features
The chatbot automatically knows:
- Your current GPA (if calculated)
- Your programme (e.g., BIT, BEPM)
- Your current semester
- Conversation history (last 6 messages)

## Technical Details

### API Configuration
- **Model**: llama-3.3-70b-versatile
- **Max Tokens**: 600 per response
- **Temperature**: 0.7 (balanced creativity)
- **System Instructions**: IAA-specific academic advisor prompt with the persona "GAP"

## Troubleshooting

### "API key not configured" Error
- Ensure `.env` file exists in the root directory
- Check that the variable name is exactly `VITE_GROQ_API_KEY`
- Restart the development server

### "Invalid API key" Error
- Go to https://console.groq.com/keys
- Create a new API key
- Replace the key in `.env`
- Restart dev server

### Chatbot Not Responding
- Check browser console for errors (F12)
- Verify internet connection
- Check Groq API status
- Ensure API key is valid

### Rate Limit Errors
- If you see a rate limit error, wait a few seconds and try again. The service automatically implements a short delay to help avoid hitting rate limits.

## Mock Mode (Optional)

If you want to test without API calls or when offline:

1. Edit `.env`:
```
VITE_USE_MOCK_RESPONSES=true
```

2. Restart dev server

The chatbot will use intelligent rule-based responses instead of AI.

## API Key Security
- ✅ Stored in `.env` (not committed to git)
- ✅ Never shared publicly
- ✅ `.gitignore` configured
- ✅ Environment variable prefixed with `VITE_`

## Support
- Groq Console: https://console.groq.com
- Get API Key: https://console.groq.com/keys
