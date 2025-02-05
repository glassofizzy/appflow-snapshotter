import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface StepOneProps {
  docType: string;
  setDocType: (value: string) => void;
  docUrl: string;
  setDocUrl: (value: string) => void;
  inputMethod: 'url' | 'upload';
  setInputMethod: (value: 'url' | 'upload') => void;
  uploadedFile: File | null;
  setUploadedFile: (file: File | null) => void;
  onNext: () => void;
}

const StepOne = ({
  docType,
  setDocType,
  docUrl,
  setDocUrl,
  inputMethod,
  setInputMethod,
  uploadedFile,
  setUploadedFile,
  onNext,
}: StepOneProps) => {
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = [
        'application/pdf',
        'image/jpeg',
        'image/png',
        'image/gif',
        'video/mp4',
        'video/quicktime'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF, image (JPG, PNG, GIF), or video (MP4, MOV) file",
          variant: "destructive",
        });
        return;
      }
      
      setUploadedFile(file);
      toast({
        title: "File Uploaded",
        description: `Successfully uploaded ${file.name}`,
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 bg-white p-8 rounded-lg border-2 border-cohere-light-gray">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="docType">Type of documentation</Label>
          <Select value={docType} onValueChange={setDocType}>
            <SelectTrigger className="w-full bg-white border-2 border-cohere-light-gray">
              <SelectValue placeholder="Select documentation type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="product-requirements">Product Requirements</SelectItem>
              <SelectItem value="figma-prototype">Figma Prototype</SelectItem>
              <SelectItem value="google-slides">Google Slides</SelectItem>
              <SelectItem value="pdf">PDF Document</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label>How would you like to provide your documentation?</Label>
          <div className="flex gap-4">
            <Button
              type="button"
              variant={inputMethod === 'url' ? 'default' : 'outline'}
              onClick={() => setInputMethod('url')}
              className="flex-1"
            >
              Enter URL
            </Button>
            <Button
              type="button"
              variant={inputMethod === 'upload' ? 'default' : 'outline'}
              onClick={() => setInputMethod('upload')}
              className="flex-1"
            >
              Upload File
            </Button>
          </div>
        </div>

        {inputMethod === 'url' && (
          <div className="space-y-2">
            <Label htmlFor="docUrl">Documentation URL</Label>
            <div className="flex gap-4">
              <Input
                id="docUrl"
                type="url"
                placeholder="Enter URL to documentation"
                className="flex-1 bg-white border-2 border-cohere-light-gray"
                value={docUrl}
                onChange={(e) => setDocUrl(e.target.value)}
              />
            </div>
            <p className="text-sm text-cohere-medium-gray">
              Ensure the document is public or provide read access to robin@carboncopies.ai
            </p>
          </div>
        )}

        {inputMethod === 'upload' && (
          <div className="space-y-2">
            <Label htmlFor="fileUpload">Upload Documentation</Label>
            <Input
              id="fileUpload"
              type="file"
              accept=".pdf,image/*,video/mp4,video/quicktime"
              onChange={handleFileChange}
              className="flex-1 bg-white border-2 border-cohere-light-gray"
            />
            {uploadedFile && (
              <p className="text-sm text-cohere-medium-gray">
                Selected file: {uploadedFile.name}
              </p>
            )}
            <p className="text-sm text-cohere-medium-gray">
              Supported formats: PDF, Images (JPG, PNG, GIF), Videos (MP4, MOV)
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <Button 
          onClick={onNext}
          className="bg-cohere-dark-green text-white hover:bg-opacity-90"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepOne;