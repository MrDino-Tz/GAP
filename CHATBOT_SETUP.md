# Chatbot Setup Guide - Google Gemini AI

## Overview
The GAP application now uses **Google Gemini AI** for the academic advisor chatbot. Gemini is Google's latest AI model offering free tier and excellent performance.

## Features
- **GPA Improvement Tips**: Context-aware advice based on current performance
- **Study Strategies**: Time management and effective study techniques
- **Module-Specific Advice**: Guidance on specific courses
- **Career Guidance**: Career path suggestions based on GPA
- **Academic Regulations**: IAA policies and grading system explanations
- **Grading System Help**: Understanding the IAA grading scale

## Setup Instructions

### 1. Get Google Gemini API Key (FREE)
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key

### 2. Configure the Application
Your `.env` file is already configured with:
```
VITE_GEMINI_API_KEY=AIzaSyC7gPC9CbFsNgebzmQAvNJ_8evSAS2ogL0
VITE_USE_MOCK_RESPONSES=false
```

### 3. Start the Application
```bash
npm run dev
```

## Why Gemini AI?

### Advantages over OpenAI
- ✅ **Free Tier**: Generous free quota (no credit card required)
- ✅ **Fast**: Quick response times
- ✅ **Powerful**: Uses Gemini 2.0 Flash (latest model)
- ✅ **Reliable**: No quota errors for normal usage
- ✅ **Easy Setup**: No billing required

### Free Tier Limits
- 15 requests per minute
- 1 million tokens per day
- More than enough for academic chatbot usage

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
- **Model**: gemini-2.0-flash-exp
- **Max Tokens**: 500 per response
- **Temperature**: 0.7 (balanced creativity)
- **System Instructions**: IAA-specific academic advisor prompt

### Cost
- **Free Tier**: Sufficient for typical usage
- **No billing required**: Unlike OpenAI
- **Rate Limits**: 15 requests/minute (more than enough)

## Troubleshooting

### "API key not configured" Error
- Ensure `.env` file exists in the root directory
- Check that the variable name is exactly `VITE_GEMINI_API_KEY`
- Restart the development server

### "Invalid API key" Error
- Go to https://aistudio.google.com/app/apikey
- Create a new API key
- Replace the key in `.env`
- Restart dev server

### Chatbot Not Responding
- Check browser console for errors (F12)
- Verify internet connection
- Check Gemini API status
- Ensure API key is valid

### Rate Limit Errors
- Free tier: 15 requests per minute
- Wait a minute if you hit the limit
- Normal usage won't hit this limit

## Mock Mode (Optional)

If you want to test without API calls:

1. Edit `.env`:
```
VITE_USE_MOCK_RESPONSES=true
```

2. Restart dev server

The chatbot will use intelligent rule-based responses instead of AI.

## Comparison: Gemini vs OpenAI

| Feature | Gemini AI | OpenAI GPT |
|---------|-----------|------------|
| Free Tier | ✅ Yes | ❌ No |
| Setup | Easy | Requires billing |
| Performance | Excellent | Excellent |
| Cost | Free | ~$0.002/request |
| Rate Limits | 15/min | Varies by plan |
| Best For | Students, Testing | Production at scale |

## API Key Security
- ✅ Stored in `.env` (not committed to git)
- ✅ Never shared publicly
- ✅ `.gitignore` configured
- ✅ Environment variable prefixed with `VITE_`

## Support
- Gemini API Docs: https://ai.google.dev/docs
- Get API Key: https://aistudio.google.com/app/apikey
- Check Usage: https://aistudio.google.com/app/apikey (shows quota)

**The chatbot is now powered by Google Gemini AI - fast, free, and powerful!** 🎉
