interface SavedSemester {
  programmeName?: string;
  semesterNumber: number;
  semesterName?: string;
  gpa: number;
  totalCreditHours: number;
  savedAt: string;
}

interface ChatContext {
  userGPA?: number;
  programmeName?: string;
  semesterNumber?: number;
  savedSemesters?: SavedSemester[];
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>;
}

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'openai/gpt-oss-120b';

const getApiKey = (): string => {
  const part1 = import.meta.env.VITE_GROQ_API_KEY_PART1;
  const part2 = import.meta.env.VITE_GROQ_API_KEY_PART2;
  const apiKey = (part1 || '') + (part2 || '');

  if (!apiKey || apiKey.length < 10) {
    throw new Error('Groq API key not configured. Please add VITE_GROQ_API_KEY_PART1 and VITE_GROQ_API_KEY_PART2 to your .env file.');
  }

  return apiKey;
};

const buildSystemPrompt = (context: ChatContext): string => {
  let prompt = `You are GAP Bot, an AI academic advisor for IAA (Institute of Accountancy Arusha) students. Your name is GAP Bot and you should introduce yourself as GAP Bot when greeting users. Your role is to provide helpful, accurate, and supportive guidance on:

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

HOW TO USE THE GAP CALCULATOR APP (use this exact procedure when a student asks how to use the calculator or any feature):
1. SELECT UNIVERSITY: Pick your university from the dropdown at the top of the calculator.
2. SELECT ACADEMIC LEVEL: Choose your level (Certificate, Diploma, Bachelor, Masters). The programme list depends on the level.
3. SELECT PROGRAMME: Choose your specific academic programme - this loads that programme's modules.
4. SELECT SEMESTER: Pick the semester you want to calculate (e.g. Semester 1, Semester 2).
5. ENTER GRADES: For EVERY module shown, choose the earned letter grade (A, B+, B, C, D, F). All modules must have a grade before calculating.
6. CALCULATE & SAVE: Click the button labeled "Calculate Semester GPA & Save Results". This computes the semester GPA AND automatically saves the result in one single step - there is no separate save button.
7. RESULTS: The app shows the Semester GPA, a performance evaluation text, quality points, and total credit hours.
8. TRACK CGPA: All saved semesters appear under the "CGPA Summary" card. Click "Calculate CGPA" to compute the cumulative GPA across all saved semesters.
9. UPDATE A SEMESTER: To correct a saved semester, reselect the same programme and semester, change grades, then click "Calculate Semester GPA & Save Results" again - it overwrites that programme + semester's saved copy.
10. EXPORT TO PDF: 
    - The "Export PDF" button on a semester's results downloads that semester's report (with logo, programme and current CGPA).
    - The "Export Full Report" button inside the "CGPA Summary" card downloads a full cumulative PDF of all saved semesters, with the overall CGPA and chosen university displayed at the top.
11. GPA TOOLS (under the "Tools" menu): 
    - "What-If Simulator" lets the student predict their GPA for a semester by trying different grades.
    - "Target GPA Calculator" tells the student the GPA they need this semester to reach a desired CGPA.
12. RESET: The "Reset" button clears the current calculation. "Reset All Data" deletes all saved semesters.

If a student asks how to use the app, find a feature, or navigate the calculator, answer directly using ONLY the numbered steps above.

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

  if (context.savedSemesters && context.savedSemesters.length > 0) {
    prompt += `\n\nAcademic History (saved semesters):`;
    const sorted = [...context.savedSemesters].sort((a, b) => a.semesterNumber - b.semesterNumber);
    for (const sem of sorted) {
      prompt += `\n- ${sem.semesterName || `Semester ${sem.semesterNumber}`} (${sem.programmeName || ''}): GPA ${sem.gpa.toFixed(2)}, ${sem.totalCreditHours} credits`;
    }
    const avgGpa = sorted.reduce((sum, s) => sum + s.gpa, 0) / sorted.length;
    prompt += `\n\nAverage GPA across ${sorted.length} saved semester(s): ${avgGpa.toFixed(2)}`;
    if (context.userGPA !== undefined) {
      prompt += `\nCurrent semester GPA: ${context.userGPA.toFixed(2)}`;
    }
    prompt += `\n\nUse this history to give personalized advice.`;
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
- Be culturally sensitive and aware of IAA's academic environment
- Always remember your name is GAP Bot

PRIVACY & DATA STORAGE (answer truthfully when asked about data storage/privacy):
- I, GAP Bot, do NOT store or keep any of the student's results, grades, or personal data. I never see or retain their records after a conversation.
- All results and saved semesters are STORED ONLY LOCALLY in the student's own browser (localStorage) on their device. Nothing is uploaded to any server by the calculator.
- If a student asks "do you store my results?", "where is my data kept?", or anything about privacy, clearly reassure them that their data stays on their own device only and is never stored by me or sent anywhere.

ABOUT THE DEVELOPER:
- The GAP Calculator (GPA Academic Planner) was created and is maintained by DTC Group.
- If a student asks who made GAP, who developed it, who the creator is, or who is behind it, always answer that it is DTC Group.`;

  return prompt;
};

// Track the last request time to implement rate limiting
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 2000; // 2 seconds between requests (Groq is fast)

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
    
    const waitTime = isRateLimitError ? 10000 : delay;
    
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
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }
  
  lastRequestTime = Date.now();
  
  try {
    const apiKey = getApiKey();
    const systemPrompt = buildSystemPrompt(context);

    // Build messages array for Groq (OpenAI-compatible format)
    const messages: Array<{ role: string; content: string }> = [
      { role: 'system', content: systemPrompt }
    ];

    // Add recent conversation history (last 6 messages)
    const recentHistory = context.conversationHistory.slice(-6);
    for (const msg of recentHistory) {
      messages.push({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      });
    }

    // Add the current user message
    messages.push({ role: 'user', content: userMessage });

    const response = await withRetry(async () => {
      const res = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages,
          max_tokens: 600,
          temperature: 0.7,
          top_p: 0.9,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const errorMessage = (errorData as any)?.error?.message || `HTTP ${res.status}`;
        throw new Error(`Groq API error: ${errorMessage}`);
      }

      return res.json();
    });

    const content = (response as any)?.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No response received from Groq AI');
    }

    return content;
  } catch (error) {
    console.error('Chatbot service error:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('API key') || error.message.includes('API_KEY') || error.message.includes('Invalid API Key')) {
        throw new Error('Groq API key is invalid or not configured. Please check VITE_GROQ_API_KEY in your .env file.');
      }
      if (error.message.includes('400')) {
        throw new Error('Invalid request to Groq API. Please check the configuration.');
      }
      if (error.message.includes('401') || error.message.includes('403')) {
        throw new Error('Invalid Groq API key. Please check your API key at console.groq.com.');
      }
      if (error.message.includes('429')) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      }
      if (error.message.includes('quota')) {
        throw new Error('Groq API quota exceeded. Please check your usage at console.groq.com.');
      }
      throw new Error(`Groq Error: ${error.message}`);
    }
    
    throw new Error('Failed to get response from GAP AI service');
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
  
  if (lowerMsg.includes('store') || lowerMsg.includes('privacy') || lowerMsg.includes('private') || lowerMsg.includes('keep my') || lowerMsg.includes('where is my data')) {
    return `Good question! Here's the truth about your data:

- **I, GAP Bot, do NOT store your results.** I don't keep, see, or retain any of your grades or records after our conversation.
- **Your data stays only on YOUR device.** All saved semesters and results are stored locally in your browser (localStorage) and are never uploaded to any server.
- You can clear everything anytime with the **"Reset All Data"** button.

Your privacy is protected - nothing leaves your browser!`;
  }
  
  if (lowerMsg.includes('who made') || lowerMsg.includes('who created') || lowerMsg.includes('who developed') || lowerMsg.includes('who is behind') || lowerMsg.includes('creator') || lowerMsg.includes('developer')) {
    return `The GAP Calculator (GPA Academic Planner) was created and is maintained by **DTC Group** - the team that designed and built the entire app, including me, GAP Bot.`;
  }
  
  if (lowerMsg.includes('how to use') || lowerMsg.includes('how do i') || lowerMsg.includes('how can i') || lowerMsg.includes('procedure') || lowerMsg.includes('steps') || (lowerMsg.includes('use') && (lowerMsg.includes('app') || lowerMsg.includes('calculator')))) {
    return `Here's how to use the GAP Calculator step by step:

1. **Select University** - Pick your university from the dropdown.
2. **Select Academic Level** - Choose Certificate, Diploma, Bachelor, or Masters.
3. **Select Programme** - Choose your academic programme to load its modules.
4. **Select Semester** - Pick the semester you want to calculate.
5. **Enter Grades** - Give every module a letter grade (A, B+, B, C, D, F).
6. **Calculate & Save** - Click "Calculate Semester GPA & Save Results". This computes AND saves the result in one step.
7. **View Results** - See your Semester GPA, performance evaluation, quality points, and credit hours.
8. **Track CGPA** - Saved semesters appear in the "CGPA Summary" card. Click "Calculate CGPA" for your cumulative GPA.
9. **Update a Semester** - Reselect the same programme and semester, fix grades, and recalculate to overwrite the saved copy.
10. **Export to PDF** - "Export PDF" for a semester report; "Export Full Report" for a full cumulative report with your CGPA and university.
11. **Tools** - "What-If Simulator" predicts GPAs; "Target GPA Calculator" shows the GPA needed for a desired CGPA.
12. **Reset** - "Reset" clears current calculations; "Reset All Data" removes all saved semesters.

Is there a specific step you'd like more detail on?`;
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
  return `Hello! I'm **GAP Bot**, your AI academic advisor. I can help you with:

- **GPA improvement strategies** - How to boost your academic performance
- **Study techniques** - Effective methods for IAA modules
- **Career guidance** - Paths based on your academic performance
- **IAA policies** - Grading system, credit requirements, regulations
- **Module advice** - Specific guidance for your courses

${context.userGPA ? `Based on your GPA of ${context.userGPA.toFixed(2)}, ` : ''}Feel free to ask about any academic concerns!

*Note: Currently running in mock mode. Set VITE_USE_MOCK_RESPONSES=false to enable Groq AI.*`;
};
