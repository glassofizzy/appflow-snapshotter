import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import StepOne from '@/components/document-comparison/StepOne';
import StepTwo from '@/components/document-comparison/StepTwo';
import StepThree from '@/components/document-comparison/StepThree';

const DocumentComparison = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  
  // Step 1 states
  const [docType, setDocType] = useState('');
  const [docUrl, setDocUrl] = useState('');
  const [inputMethod, setInputMethod] = useState<'url' | 'upload'>('url');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  
  // Step 2 states
  const [selectedFlow, setSelectedFlow] = useState('');
  const [customFlow, setCustomFlow] = useState('');
  
  // Step 3 states
  const [webUrl, setWebUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('');
  const [location, setLocation] = useState('');
  const [persona, setPersona] = useState('');
  const [attention, setAttention] = useState('');
  const [ignore, setIgnore] = useState('');

  const handleNext = () => {
    if (step === 1) {
      if (inputMethod === 'url' && !docUrl) {
        toast({
          title: "Missing Information",
          description: "Please provide a documentation URL to continue",
          variant: "destructive",
        });
        return;
      }
      if (inputMethod === 'upload' && !uploadedFile) {
        toast({
          title: "Missing Information",
          description: "Please upload a document to continue",
          variant: "destructive",
        });
        return;
      }
    } else if (step === 2 && !selectedFlow) {
      toast({
        title: "Missing Information",
        description: "Please select a user flow to continue",
        variant: "destructive",
      });
      return;
    } else if (step === 3) {
      if (!webUrl) {
        toast({
          title: "Missing Information",
          description: "Please provide a Web URL or App ID to continue",
          variant: "destructive",
        });
        return;
      }
      if (!persona) {
        toast({
          title: "Missing Information",
          description: "Please provide a persona description to continue",
          variant: "destructive",
        });
        return;
      }
      navigate('/compare');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    setStep(prev => prev - 1);
  };

  return (
    <div className="min-h-screen bg-cohere-light-beige py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-cohere-dark-green">COMPARE WITH</h1>
          <p className="text-xl text-cohere-medium-gray max-w-2xl mx-auto">
            Compare your latest documentation with the current implementation to view differences/outdated documentation
          </p>
        </div>

        {step === 1 && (
          <StepOne
            docType={docType}
            setDocType={setDocType}
            docUrl={docUrl}
            setDocUrl={setDocUrl}
            inputMethod={inputMethod}
            setInputMethod={setInputMethod}
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
            onNext={handleNext}
          />
        )}

        {step === 2 && (
          <StepTwo
            selectedFlow={selectedFlow}
            setSelectedFlow={setSelectedFlow}
            customFlow={customFlow}
            setCustomFlow={setCustomFlow}
            uploadedFile={uploadedFile}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}

        {step === 3 && (
          <StepThree
            webUrl={webUrl}
            setWebUrl={setWebUrl}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            language={language}
            setLanguage={setLanguage}
            location={location}
            setLocation={setLocation}
            persona={persona}
            setPersona={setPersona}
            attention={attention}
            setAttention={setAttention}
            ignore={ignore}
            setIgnore={setIgnore}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </div>
    </div>
  );
};

export default DocumentComparison;