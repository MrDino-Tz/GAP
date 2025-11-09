import { GoogleGenerativeAI } from '@google/generative-ai';

interface ChatContext {
  userGPA?: number;
  programmeName?: string;
  semesterNumber?: number;
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>;
}

const getGeminiClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  console.log('Checking Gemini API key...');
  console.log('API key exists:', !!apiKey);
  console.log('API key starts with:', apiKey?.substring(0, 10));
  
  if (!apiKey) {
    throw new Error('Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.');
  }

  return new GoogleGenerativeAI(apiKey);
};

const buildSystemPrompt = (context: ChatContext): string => {
  let prompt = `You are an AI academic advisor for IAA (Institute of Accountancy Arusha) students. Your role is to provide helpful, accurate, and supportive guidance on:

1. GPA Improvement Tips: Provide specific, actionable advice based on student performance
2. Study Strategies: Recommend effective study techniques, time management, and productivity tips
3. Module-Specific Advice: Give guidance on specific courses and subjects
4. Career Guidance: Suggest career paths based on academic performance and interests
5. Academic Regulations: Explain IAA policies, grading system, and academic procedures
6. Grading System: IAA uses the following grading scale:
   - A (70-100): 5.0 - Excellent
   - B+ (60-69): 4.0 - Very Good
   - B (50-59): 3.0 - Good
   - C (40-49): 2.0 - Satisfactory
   - D (35-39): 1.0 - Poor
   - F (0-34): 0.0 - Failure

GPA Calculation: GPA = Σ(Grade Point × Credit Hours) / Σ(Credit Hours)

`;

  if (context.userGPA !== undefined) {
    prompt += `\nThe student's current GPA is ${context.userGPA.toFixed(2)}.`;
    
    if (context.userGPA >= 4.5) {
      prompt += ' This is excellent performance. Encourage them to maintain this level and explore advanced opportunities.';
    } else if (context.userGPA >= 4.0) {
      prompt += ' This is very good performance. Suggest ways to reach excellence.';
    } else if (context.userGPA >= 3.5) {
      prompt += ' This is good performance. Provide tips for improvement to reach very good level.';
    } else if (context.userGPA >= 3.0) {
      prompt += ' This is satisfactory. Focus on specific improvement strategies.';
    } else if (context.userGPA >= 2.0) {
      prompt += ' This needs improvement. Provide supportive, actionable advice.';
    } else {
      prompt += ' This requires significant improvement. Be supportive and provide clear action plans.';
    }
  }

  if (context.programmeName) {
    prompt += `\nThe student is enrolled in ${context.programmeName}.`;
  }

  if (context.semesterNumber) {
    prompt += `\nThey are currently in Semester ${context.semesterNumber}.`;
  }

  prompt += `

Important Guidelines:
- Be supportive, encouraging, and non-judgmental
- Provide specific, actionable advice
- Use simple, clear language
- Keep responses concise but helpful (2-4 paragraphs max)
- When discussing grades, always reference the IAA grading scale
- Focus on practical solutions and study techniques
- Encourage healthy study-life balance
- Suggest resources and strategies specific to their situation
- Be culturally sensitive and aware of IAA's academic environment`;

  return prompt;
};

// Track the last request time to implement rate limiting
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 5000; // 5 seconds between requests

// Simple retry mechanism
const withRetry = async <T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (maxRetries <= 0) throw error;
    
    // If rate limited, wait longer
    const isRateLimitError = error instanceof Error && 
      (error.message.includes('rate limit') || 
       error.message.includes('429') ||
       error.message.includes('quota'));
    
    const waitTime = isRateLimitError ? 10000 : delay; // 10s for rate limits, 1s for other errors
    
    console.log(`Retrying in ${waitTime}ms... (${maxRetries} attempts left)`);
    await new Promise(resolve => setTimeout(resolve, waitTime));
    return withRetry(fn, maxRetries - 1, delay * 2);
  }
};

export const getChatbotResponse = async (
  userMessage: string,
  context: ChatContext
): Promise<string> => {
  // Mock mode for testing without API credits
  if (import.meta.env.VITE_USE_MOCK_RESPONSES === 'true') {
    console.log('Using mock response (no API call)');
    await new Promise(resolve => setTimeout(resolve, 1000));
    return getMockResponse(userMessage, context);
  }

  // Implement rate limiting
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    const waitTime = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
    console.log(`Rate limiting: Waiting ${waitTime}ms before next request`);
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }
  
  lastRequestTime = Date.now();
  
  try {
    console.log('Getting chatbot response from Gemini...');
    const genAI = getGeminiClient();
    console.log('Gemini client created successfully');
    
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash-exp',
    });

    // Build conversation history for Gemini
    let history = context.conversationHistory.slice(-5).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    // Create a clean user message with system prompt
    const systemPrompt = buildSystemPrompt(context);
    const userMessageWithContext = {
      role: 'user' as const,
      parts: [{ text: `${systemPrompt}\n\n${userMessage}` }]
    };

    // If we have history, add it after the system prompt
    if (history.length > 0) {
      history = [userMessageWithContext, ...history];
    } else {
      history = [userMessageWithContext];
    }

    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      }
    });

    console.log('Sending request to Gemini with history:', JSON.stringify(history, null, 2));
    
    // Send the entire history as a single user message with context
    const result = await withRetry(
      () => chat.sendMessage(history[0].parts[0].text)
    );
    console.log('Received response from Gemini');
    
    const response = result.response.text();

    if (!response) {
      throw new Error('No response received from Gemini AI');
    }

    return response;
  } catch (error) {
    console.error('Chatbot service error:', error);
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    
    if (error instanceof Error) {
      if (error.message.includes('API key') || error.message.includes('API_KEY')) {
        throw new Error('Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.');
      }
      if (error.message.includes('400')) {
        throw new Error('Invalid request to Gemini API. Please check the configuration.');
      }
      if (error.message.includes('401') || error.message.includes('403')) {
        throw new Error('Invalid Gemini API key. Please check your API key.');
      }
      if (error.message.includes('429')) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      }
      if (error.message.includes('quota')) {
        throw new Error('Gemini API quota exceeded. Please check your usage at https://aistudio.google.com');
      }
      throw new Error(`Gemini Error: ${error.message}`);
    }
    
    throw new Error('Failed to get response from Gemini AI service');
  }
};

const getMockResponse = (userMessage: string, context: ChatContext): string => {
  const lowerMsg = userMessage.toLowerCase();
  
  if (lowerMsg.includes('gpa') && lowerMsg.includes('improve')) {
    if (context.userGPA && context.userGPA < 3.0) {
      return `Based on your current GPA of ${context.userGPA.toFixed(2)}, here are key improvement strategies:

1. **Attend all classes** - Consistent attendance is crucial
2. **Form study groups** - Collaborate with classmates
3. **Meet with lecturers** - Get clarification on difficult topics
4. **Create a study schedule** - Allocate 2-3 hours daily for revision
5. **Focus on weak modules** - Identify and strengthen problem areas

Remember, with dedication, you can improve by 0.5-1.0 GPA points per semester!`;
    }
    return `Great question! To improve your GPA:

1. **Consistent study habits** - Study 2-3 hours daily, not just before exams
2. **Active learning** - Take notes, ask questions, participate in class
3. **Time management** - Use a planner to balance academics and life
4. **Practice problems** - Especially for technical modules
5. **Seek help early** - Don't wait until you're struggling

Consistency is key to academic excellence!`;
  }
  
  if (lowerMsg.includes('grading') || lowerMsg.includes('grade')) {
    return `IAA Grading System:

- **A (70-100)**: 5.0 - Excellent
- **B+ (60-69)**: 4.0 - Very Good
- **B (50-59)**: 3.0 - Good
- **C (40-49)**: 2.0 - Satisfactory (Pass)
- **D (35-39)**: 1.0 - Poor (Below Average)
- **F (0-34)**: 0.0 - Failure

**GPA Calculation**: Sum of (Grade Point × Credit Hours) ÷ Total Credit Hours

To pass a module, you need at least 40% (Grade C, 2.0 points).`;
  }
  
  if (lowerMsg.includes('study') || lowerMsg.includes('strateg')) {
    return `Effective Study Strategies for IAA Students:

**Time Management:**
- Create a weekly study timetable
- Use Pomodoro Technique (25 min study, 5 min break)
- Prioritize difficult modules

**Study Techniques:**
- Active recall - Test yourself regularly
- Spaced repetition - Review material multiple times
- Mind maps - Visualize complex concepts
- Group study - Teach others to reinforce learning

**Exam Preparation:**
- Start revision 3-4 weeks before exams
- Practice past papers
- Create summary notes
- Get adequate sleep (7-8 hours)

Balance is important - maintain social connections and physical health!`;
  }
  
  if (lowerMsg.includes('career') || lowerMsg.includes('job')) {
    let gpaAdvice = '';
    if (context.userGPA) {
      if (context.userGPA >= 4.0) {
        gpaAdvice = 'With your excellent GPA, you qualify for top graduate programs and competitive job positions. Consider pursuing CPA, ACCA, or graduate studies.';
      } else if (context.userGPA >= 3.5) {
        gpaAdvice = 'Your strong GPA opens many career doors. Focus on internships and professional certifications to stand out.';
      } else if (context.userGPA >= 3.0) {
        gpaAdvice = 'You have good opportunities. Build practical experience through internships and consider professional certifications.';
      }
    }
    
    return `Career Guidance for ${context.programmeName || 'IAA Students'}:

${gpaAdvice}

**Career Paths:**
- Accounting firms (PwC, Deloitte, EY, KPMG)
- Banking and finance sector
- Government agencies (TRA, BoT, CAG)
- Corporate finance departments
- Entrepreneurship and consulting

**Next Steps:**
1. Complete internships during semester breaks
2. Pursue professional certifications (CPA-T, ACCA, CFA)
3. Network at professional events
4. Build soft skills (communication, leadership)
5. Create a strong LinkedIn profile

Your academic performance is just one factor - practical skills and networking matter too!`;
  }
  
  if (lowerMsg.includes('module') || lowerMsg.includes('course')) {
    return `Module-Specific Advice:

**For Technical Modules** (Accounting, Finance, IT):
- Practice calculations regularly
- Understand formulas and when to apply them
- Work through examples before attempting assignments
- Use online resources (YouTube, Khan Academy) for extra help

**For Theory Modules** (Law, Economics, Management):
- Create concise summary notes
- Understand concepts, don't just memorize
- Relate theories to real-world examples
- Practice essay writing and time management

**General Tips:**
- Start assignments early
- Attend tutorial sessions
- Form study groups with serious students
- Review lecture notes within 24 hours

Which specific module do you need help with?`;
  }
  
  // Default response
  return `Thank you for your question! I'm here to help with:

- **GPA improvement strategies** - How to boost your academic performance
- **Study techniques** - Effective methods for IAA modules
- **Career guidance** - Paths based on your academic performance
- **IAA policies** - Grading system, credit requirements, regulations
- **Module advice** - Specific guidance for your courses

${context.userGPA ? `Based on your GPA of ${context.userGPA.toFixed(2)}, ` : ''}Feel free to ask about any academic concerns!

*Note: Currently running in mock mode. Set VITE_USE_MOCK_RESPONSES=false to enable Gemini AI.*`;
};
