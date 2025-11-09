import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
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

const AcademicChatbot: React.FC<AcademicChatbotProps> = ({ 
  userGPA, 
  programmeName, 
  semesterNumber 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMockMode = import.meta.env.VITE_USE_MOCK_RESPONSES === 'true';
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I'm your academic advisor chatbot powered by ${isMockMode ? 'intelligent algorithms' : 'Google Gemini AI'}. I can help you with GPA improvement tips, study strategies, module advice, career guidance, and IAA academic policies. How can I assist you today?${isMockMode ? '\n\n*Note: Running in mock mode. For AI-powered responses, set VITE_USE_MOCK_RESPONSES=false in .env*' : ''}`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
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
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const context = {
        userGPA,
        programmeName,
        semesterNumber,
        conversationHistory: messages
      };

      console.log('Calling chatbot service with message:', input.trim());
      const response = await getChatbotResponse(input.trim(), context);
      console.log('Got response:', response);

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      
      let errorMsg = 'I apologize, but I encountered an error. ';
      
      if (error instanceof Error) {
        errorMsg += error.message;
      } else {
        errorMsg += 'Please check the browser console for more details.';
      }
      
      const errorMessage: Message = {
        role: 'assistant',
        content: errorMsg,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to get response',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 z-50">
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 h-12 w-12 sm:h-14 sm:w-14 rounded-full p-0 shadow-lg transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        variant="default"
        size="icon"
      >
        {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
        <span className="sr-only">{isOpen ? 'Close chat' : 'Open chat'}</span>
      </Button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-0 right-0 sm:bottom-24 sm:right-8 w-full sm:w-96 h-[80vh] sm:h-[600px] flex flex-col rounded-t-lg sm:rounded-lg border bg-background shadow-xl transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <div>
                <h3 className="text-lg font-semibold">Manto AI</h3>
                <p className="text-xs opacity-80">
                  DTC Group AI-powered guidance for Academic Performance
                </p>
              </div>
            </div>
            <Button
              onClick={toggleChat}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col">
          <ScrollArea
            ref={scrollAreaRef}
            className="flex-1 p-4"
          >
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[75%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>

                  {message.role === 'user' && (
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                      <User className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                className="flex-1 text-sm sm:text-base h-11"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
              />
              <Button
                type="button"
                size="icon"
                className="h-11 w-11"
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicChatbot;
