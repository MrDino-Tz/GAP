import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PDFUploaderProps {
  onTextExtracted: (text: string) => void;
}

const PDFUploader: React.FC<PDFUploaderProps> = ({ onTextExtracted }) => {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE_MB = 20; // 20MB max file size
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.log('No file selected');
      return;
    }

    console.log('File selected:', {
      name: file.name,
      type: file.type,
      size: file.size,
      lastModified: file.lastModified
    });

    // Check file type more flexibly
    if (!file.type.includes('pdf') && !file.name.toLowerCase().endsWith('.pdf')) {
      console.error('Invalid file type:', file.type);
      toast({
        title: 'Invalid File Type',
        description: 'Please upload a valid PDF file.',
        variant: 'destructive',
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      console.error('File too large:', file.size, 'bytes');
      toast({
        title: 'File Too Large',
        description: `File is too large (${(file.size / (1024 * 1024)).toFixed(2)}MB). Maximum size is ${MAX_FILE_SIZE_MB}MB.`,
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log('Loading pdf-parse library...');
      const pdfjs = await import('pdf-parse');
      console.log('Library loaded, processing PDF...');
      
      const arrayBuffer = await file.arrayBuffer();
      console.log('File loaded, parsing...');
      
      const data = await pdfjs.default(arrayBuffer, {
        max: 10 * 1024 * 1024, // 10MB of text max
        version: 'v2.0.0',
      });
      
      console.log('PDF parsed successfully');
      onTextExtracted(data.text);
      
      toast({
        title: 'Success',
        description: 'PDF processed successfully!',
      });
    } catch (error) {
      console.error('Error processing PDF:', error);
      let errorMessage = 'Failed to process the PDF. ';
      
      if (error instanceof Error) {
        if (error.message.includes('Invalid PDF')) {
          errorMessage += 'The file is not a valid PDF or is corrupted.';
        } else if (error.message.includes('password')) {
          errorMessage += 'The PDF is password protected and cannot be processed.';
        } else {
          errorMessage += error.message;
        }
      }
      
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5 text-primary" />
          Upload PDF
        </CardTitle>
        <CardDescription>
          Upload your academic document to extract grading information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
            disabled={isLoading}
          />
          {isLoading ? (
            <>
              <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
              <p className="text-sm text-muted-foreground">Processing PDF...</p>
            </>
          ) : (
            <>
              <Upload className="h-10 w-10 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-1">
                <span className="font-medium text-primary">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">
                PDF (max. {MAX_FILE_SIZE_MB}MB)
              </p>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PDFUploader;
