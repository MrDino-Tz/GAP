# Chatbot Troubleshooting Guide

## Issue: "Failed to get response" Error

If you're seeing this error, follow these steps:

### Step 1: Restart Development Server
The dev server MUST be restarted after adding/modifying the `.env` file:

```bash
# Stop the current dev server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 2: Check Browser Console
1. Open browser DevTools (F12 or Right-click → Inspect)
2. Go to the **Console** tab
3. Try sending a message in the chatbot
4. Look for these log messages:
   - "Checking API key..."
   - "API key exists: true"
   - "API key starts with: sk-proj-OO"
   - "Getting chatbot response..."
   - "OpenAI client created successfully"
   - "Sending request to OpenAI..."

### Step 3: Common Error Messages

#### Error: "API key not configured"
**Solution**: 
- Make sure `.env` file exists in project root
- Verify it contains: `VITE_OPENAI_API_KEY=sk-...`
- Restart dev server

#### Error: "Invalid API key" (401)
**Solution**:
- Your API key might be expired or invalid
- Go to https://platform.openai.com/api-keys
- Create a new API key
- Replace the old key in `.env`
- Restart dev server

#### Error: "insufficient_quota"
**Solution**:
- Your OpenAI account has no credits
- Go to https://platform.openai.com/account/billing
- Add payment method and credits

#### Error: "Rate limit exceeded" (429)
**Solution**:
- You've made too many requests
- Wait a few minutes and try again

### Step 4: Verify API Key Format
Your API key should:
- Start with `sk-proj-` or `sk-`
- Be about 150-200 characters long
- Have no spaces or line breaks

Check in terminal:
```bash
cat .env
# Should show: VITE_OPENAI_API_KEY=sk-proj-...
```

### Step 5: Test API Key Directly
Create a test file `test-api.js`:

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_API_KEY_HERE',
  dangerouslyAllowBrowser: true
});

async function test() {
  try {
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: 'Say hello'}],
      max_tokens: 20
    });
    console.log('Success!', response.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
```

Run: `node test-api.js`

### Step 6: Check Network
- Ensure you have internet connection
- Check if OpenAI API is accessible: https://status.openai.com/
- Disable VPN if you have one

### Step 7: Clear Cache
Sometimes the browser caches the old environment:
1. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
2. Or clear browser cache for localhost
3. Restart dev server

### Still Not Working?

Check the detailed error in the browser console. The error message will now show specific details about what went wrong:
- API key issues
- Network problems
- OpenAI service errors
- Rate limits
- Account quota

## Quick Checklist
- [ ] `.env` file exists in project root
- [ ] File contains `VITE_OPENAI_API_KEY=sk-...`
- [ ] API key is valid (check OpenAI dashboard)
- [ ] Dev server was restarted after adding `.env`
- [ ] Browser console shows "API key exists: true"
- [ ] OpenAI account has credits
- [ ] Internet connection is working
- [ ] No VPN blocking OpenAI API
