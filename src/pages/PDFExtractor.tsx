import { useState } from 'react';
import PDFUploader from '@/components/PDFUploader';
import { Box, Card, CardContent, CardHeader, Typography, Container } from '@mui/material';
import { Description } from '@mui/icons-material';

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
    const normalizedText = text.toLowerCase().replace(/\s+/g, ' ');
    const gradingScaleMatch = normalizedText.match(/(grading\s+scale|grading\s+system|grade\s+point|gpa\s+calculation).{100,500}?(a\s*[\d\.]+\s*[\d\s\.-]+f)/i);
    const creditHoursMatch = normalizedText.match(/(credit\s*hours?|credit\s*load|credit\s*units?).{50,200}?(\d+\s*credit\s*hours?)/gi);
    const gpaFormulaMatch = normalizedText.match(/(gpa\s*calculation|calculate\s*gpa|grade\s*point\s*average).{50,300}?(\bformula\b|\bcalculated\b|\bcompute\b|\bdetermine\b)/i);

    const findings = {
      gradingScale: gradingScaleMatch ? gradingScaleMatch[0] : 'Not found',
      creditHours: creditHoursMatch ? creditHoursMatch[0] : 'Not found',
      gpaFormula: gpaFormulaMatch ? gpaFormulaMatch[0] : 'Not found',
      rawText: text,
    };

    setGradingInfo(findings);
    setIsAnalyzed(true);
  };

  const infoCards = [
    { label: 'Grading Scale', value: gradingInfo?.gradingScale },
    { label: 'Credit Hours Information', value: gradingInfo?.creditHours },
    { label: 'GPA Calculation', value: gradingInfo?.gpaFormula },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" fontWeight={700} textAlign="center" mb={4}>IAA Prospectus Analyzer</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <PDFUploader onTextExtracted={handleTextExtracted} />

        {extractedText && (
          <>
            <Card>
              <CardHeader
                avatar={<Description color="primary" />}
                title="Analysis Results"
              />
              <CardContent>
                {infoCards.map(
                  (info) =>
                    info.value !== 'Not found' && (
                      <Box key={info.label} sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>{info.label}</Typography>
                        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
                          <Typography variant="body2">{info.value}</Typography>
                        </Box>
                      </Box>
                    )
                )}
                {isAnalyzed && (
                  <Box sx={{ mt: 2, p: 2, bgcolor: 'success.light', borderRadius: 1 }}>
                    <Typography variant="subtitle2" color="success.dark">Analysis Complete</Typography>
                    <Typography variant="body2" color="text.secondary">
                      The PDF has been analyzed. We've extracted relevant grading information.
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader
                avatar={<Description color="action" />}
                title={<Typography variant="subtitle2">Extracted Text (Preview)</Typography>}
              />
              <CardContent>
                <Box
                  sx={{
                    bgcolor: 'grey.100',
                    p: 2,
                    borderRadius: 1,
                    maxHeight: 384,
                    overflowY: 'auto',
                    whiteSpace: 'pre-wrap',
                    fontSize: '0.75rem',
                  }}
                >
                  {extractedText.length > 1000
                    ? `${extractedText.substring(0, 1000)}... [content truncated]`
                    : extractedText}
                </Box>
              </CardContent>
            </Card>
          </>
        )}
      </Box>
    </Container>
  );
}
