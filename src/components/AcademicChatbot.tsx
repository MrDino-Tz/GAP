import { useState, useRef, useEffect } from 'react';
import {
  Box, Card, CardContent, CardHeader, Typography, Button,
  TextField, IconButton, CircularProgress, Avatar,
} from '@mui/material';
import {
  Close, Send, SmartToy, Person,
} from '@mui/icons-material';
import { getChatbotResponse } from '@/lib/chatbotService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AcademicChatbotProps {
  userGPA?: number;
  programmeName?: string;
  semesterNumber?: number;
}

const AcademicChatbot = ({
  userGPA,
  programmeName,
  semesterNumber,
}: AcademicChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMockMode = import.meta.env.VITE_USE_MOCK_RESPONSES === 'true';
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I'm your academic advisor chatbot powered by ${isMockMode ? 'intelligent algorithms' : 'Google Gemini AI'}. I can help you with GPA improvement tips, study strategies, module advice, career guidance, and IAA academic policies. How can I assist you today?${isMockMode ? '\n\n*Note: Running in mock mode. For AI-powered responses, set VITE_USE_MOCK_RESPONSES=false in .env*' : ''}`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const context = { userGPA, programmeName, semesterNumber, conversationHistory: messages };
      const response = await getChatbotResponse(input.trim(), context);

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Failed to get response';
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `I apologize, but I encountered an error. ${errorMsg}`, timestamp: new Date() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, right: 0, zIndex: 1300 }}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          position: 'fixed',
          bottom: { xs: 32, lg: 40 },
          right: { xs: 16, lg: 24 },
          minWidth: { xs: 48, lg: 56 },
          width: { xs: 48, lg: 56 },
          height: { xs: 48, lg: 56 },
          borderRadius: '50%',
          p: 0,
          boxShadow: 3,
          transition: 'all 0.3s',
          transform: isOpen ? 'scale(0) rotate(180deg)' : 'scale(1)',
          '&:hover': { transform: isOpen ? 'scale(0) rotate(180deg)' : 'scale(1.1)' },
        }}
        variant="contained"
      >
        <SmartToy sx={{ fontSize: { xs: 20, lg: 24 } }} />
      </Button>

      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          right: { xs: 0, lg: 24 },
          width: { xs: '100%', lg: 420 },
          height: { xs: '70vh', lg: 500 },
          maxHeight: 700,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: { xs: '16px 16px 0 0', lg: '16px' },
          border: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          boxShadow: 8,
          transition: 'all 0.3s ease-out',
          transform: isOpen ? 'translateY(0)' : 'translateY(8px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          scale: isOpen ? '1' : '0.95',
        }}
      >
        <Box
          sx={{
            background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            color: 'primary.contrastText',
            borderRadius: { xs: '16px 16px 0 0', lg: '16px 16px 0 0' },
            p: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar sx={{ width: { xs: 32, lg: 40 }, height: { xs: 32, lg: 40 }, bgcolor: 'rgba(255,255,255,0.2)' }}>
                <SmartToy sx={{ fontSize: { xs: 16, lg: 20 } }} />
              </Avatar>
              <Box>
                <Typography variant="h6" fontWeight={700} sx={{ fontSize: { xs: '1rem', lg: '1.25rem' } }}>Manto AI</Typography>
                <Typography variant="caption" sx={{ opacity: 0.9 }}>DTC Group AI-powered Academic Guidance</Typography>
              </Box>
            </Box>
            <IconButton onClick={() => setIsOpen(false)} sx={{ color: 'inherit', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
              <Close />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  gap: 1.5,
                  justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {message.role === 'assistant' && (
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.light' }}>
                    <SmartToy sx={{ fontSize: 16, color: 'primary.main' }} />
                  </Avatar>
                )}
                <Box
                  sx={{
                    maxWidth: { xs: '75%', lg: '80%' },
                    borderRadius: 2,
                    p: 1.5,
                    bgcolor: message.role === 'user' ? 'primary.main' : 'grey.100',
                    color: message.role === 'user' ? 'primary.contrastText' : 'text.primary',
                  }}
                >
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{message.content}</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7, display: 'block', mt: 0.5 }}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </Typography>
                </Box>
                {message.role === 'user' && (
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                    <Person sx={{ fontSize: 16, color: 'primary.contrastText' }} />
                  </Avatar>
                )}
              </Box>
            ))}
            {isLoading && (
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.light' }}>
                  <SmartToy sx={{ fontSize: 16, color: 'primary.main' }} />
                </Avatar>
                <Box sx={{ bgcolor: 'grey.100', borderRadius: 2, p: 2 }}>
                  <CircularProgress size={16} />
                </Box>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>
        </Box>

        <Box sx={{ borderTop: 1, borderColor: 'divider', p: { xs: 1.5, lg: 2 } }}>
          <Box sx={{ display: 'flex', gap: { xs: 1, lg: 1.5 } }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Ask about GPA, study tips, or academic advice..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              sx={{
                '& .MuiInputBase-root': {
                  height: { xs: 44, lg: 48 },
                  fontSize: { xs: '0.875rem', lg: '1rem' },
                },
              }}
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              sx={{
                width: { xs: 44, lg: 48 },
                height: { xs: 44, lg: 48 },
                flexShrink: 0,
              }}
            >
              {isLoading ? <CircularProgress size={16} /> : <Send />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AcademicChatbot;
