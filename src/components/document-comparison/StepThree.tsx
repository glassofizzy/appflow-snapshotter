import React from 'react';
import { Button } from "@/components/ui/button";
import AIConfigForm from '@/components/AIConfigForm';

interface StepThreeProps {
  webUrl: string;
  setWebUrl: (value: string) => void;
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  language: string;
  setLanguage: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  persona: string;
  setPersona: (value: string) => void;
  attention: string;
  setAttention: (value: string) => void;
  ignore: string;
  setIgnore: (value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const StepThree = ({
  webUrl,
  setWebUrl,
  username,
  setUsername,
  password,
  setPassword,
  language,
  setLanguage,
  location,
  setLocation,
  persona,
  setPersona,
  attention,
  setAttention,
  ignore,
  setIgnore,
  onNext,
  onPrevious,
}: StepThreeProps) => {
  return (
    <div className="w-full">
      <AIConfigForm
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
      />
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={onPrevious}
          className="border-2 border-cohere-light-gray hover:bg-cohere-light-beige"
        >
          Previous
        </Button>
        <Button 
          onClick={onNext}
          className="bg-cohere-dark-green text-white hover:bg-opacity-90"
        >
          Compare now!
        </Button>
      </div>
    </div>
  );
};

export default StepThree;