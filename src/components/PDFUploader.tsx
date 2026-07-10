import { useRef, useState } from 'react';
import {
  Box, Card, CardContent, CardHeader, Typography,
  CircularProgress, Snackbar, Alert,
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

interface PDFUploaderProps {
  onTextExtracted: (text: string) => void;
}

const PDFUploader = ({ onTextExtracted }: PDFUploaderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE_MB = 20;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('pdf') && !file.name.toLowerCase().endsWith('.pdf')) {
      showSnackbar('Please upload a valid PDF file.', 'error');
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      showSnackbar(`File is too large (${(file.size / (1024 * 1024)).toFixed(2)}MB). Maximum size is ${MAX_FILE_SIZE_MB}MB.`, 'error');
      return;
    }

    setIsLoading(true);

    try {
      const pdfjs = await import('pdf-parse');
      const arrayBuffer = await file.arrayBuffer();
      const data = await pdfjs.default(arrayBuffer, { max: 10 * 1024 * 1024, version: 'v2.0.0' });
      onTextExtracted(data.text);
      showSnackbar('PDF processed successfully!', 'success');
    } catch (error) {
      let errorMessage = 'Failed to process the PDF. ';
      if (error instanceof Error) {
        if (error.message.includes('Invalid PDF')) errorMessage += 'The file is not a valid PDF or is corrupted.';
        else if (error.message.includes('password')) errorMessage += 'The PDF is password protected and cannot be processed.';
        else errorMessage += error.message;
      }
      showSnackbar(errorMessage, 'error');
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <Card sx={{ maxWidth: 600, mx: 'auto' }}>
        <CardHeader
          avatar={<CloudUpload color="primary" />}
          title={<Typography variant="h6">Upload PDF</Typography>}
          subheader="Upload your academic document to extract grading information"
        />
        <CardContent>
          <Box
            onClick={() => fileInputRef.current?.click()}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
              border: 2,
              borderStyle: 'dashed',
              borderColor: 'divider',
              borderRadius: 2,
              cursor: 'pointer',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              style={{ display: 'none' }}
              onChange={handleFileChange}
              disabled={isLoading}
            />
            {isLoading ? (
              <>
                <CircularProgress size={40} sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.secondary">Processing PDF...</Typography>
              </>
            ) : (
              <>
                <CloudUpload sx={{ fontSize: 40, color: 'text.disabled', mb: 2 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                  <Box component="span" sx={{ color: 'primary.main', fontWeight: 500 }}>Click to upload</Box> or drag and drop
                </Typography>
                <Typography variant="caption" color="text.disabled">PDF (max. {MAX_FILE_SIZE_MB}MB)</Typography>
              </>
            )}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default PDFUploader;
