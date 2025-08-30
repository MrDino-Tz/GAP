import React, { useState } from 'react';
import PDFUploader from '@/components/PDFUploader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

interface GradingInfo {
  gradingScale: string;
  creditHours: string;
  gpaFormula: string;
  rawText: string;
}

export default function PDFExtractor() {
  const [extractedText, setExtractedText] = useState('');
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [gradingInfo, setGradingInfo] = useState<GradingInfo | null>(null);

  const handleTextExtracted = (text: string) => {
    setExtractedText(text);
    analyzeGradingInfo(text);
  };

  const analyzeGradingInfo = (text: string) => {
    // Normalize the text for easier searching
    const normalizedText = text.toLowerCase().replace(/\s+/g, ' ');
    
    // Look for grading scale patterns
    const gradingScaleMatch = normalizedText.match(/(grading\s+scale|grading\s+system|grade\s+point|gpa\s+calculation).{100,500}?(a\s*[\d\.]+\s*[\d\s\.-]+f)/i);
    
    // Look for credit hours information
    const creditHoursMatch = normalizedText.match(/(credit\s*hours?|credit\s*load|credit\s*units?).{50,200}?(\d+\s*credit\s*hours?)/gi);
    
    // Look for GPA calculation formula
    const gpaFormulaMatch = normalizedText.match(/(gpa\s*calculation|calculate\s*gpa|grade\s*point\s*average).{50,300}?(\bformula\b|\bcalculated\b|\bcompute\b|\bdetermine\b)/i);
    
    // Extract and log the findings
    const findings = {
      gradingScale: gradingScaleMatch ? gradingScaleMatch[0] : 'Not found',
      creditHours: creditHoursMatch ? creditHoursMatch[0] : 'Not found',
      gpaFormula: gpaFormulaMatch ? gpaFormulaMatch[0] : 'Not found',
      rawText: text
    };
    
    console.log('Analysis Results:', findings);
    setGradingInfo(findings);
    setIsAnalyzed(true);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center mb-8">IAA Prospectus Analyzer</h1>
        
        <PDFUploader onTextExtracted={handleTextExtracted} />

        {extractedText && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Analysis Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {gradingInfo?.gradingScale !== 'Not found' && (
                  <div>
                    <h3 className="font-medium mb-2">Grading Scale</h3>
                    <div className="bg-muted p-4 rounded-md text-sm">
                      {gradingInfo?.gradingScale}
                    </div>
                  </div>
                )}
                
                {gradingInfo?.creditHours !== 'Not found' && (
                  <div>
                    <h3 className="font-medium mb-2">Credit Hours Information</h3>
                    <div className="bg-muted p-4 rounded-md text-sm">
                      {gradingInfo?.creditHours}
                    </div>
                  </div>
                )}
                
                {gradingInfo?.gpaFormula !== 'Not found' && (
                  <div>
                    <h3 className="font-medium mb-2">GPA Calculation</h3>
                    <div className="bg-muted p-4 rounded-md text-sm">
                      {gradingInfo?.gpaFormula}
                    </div>
                  </div>
                )}
                
                {isAnalyzed && (
                  <div className="mt-4 p-4 bg-success/10 rounded-md">
                    <h3 className="font-medium text-success">Analysis Complete</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      The PDF has been analyzed. We've extracted relevant grading information.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <FileText className="h-4 w-4" />
                  Extracted Text (Preview)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md max-h-96 overflow-y-auto whitespace-pre-wrap text-xs">
                  {extractedText.length > 1000 
                    ? `${extractedText.substring(0, 1000)}... [content truncated]` 
                    : extractedText}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
