import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface AIConfigFormProps {
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
}

const AIConfigForm = ({
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
}: AIConfigFormProps) => {
  return (
    <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto bg-white p-8 rounded-lg border-2 border-cohere-light-gray">
      {/* Left Column - Preview */}
      <div className="flex flex-col items-center justify-center border-r border-gray-200 pr-8">
        <h3 className="text-xl font-bold text-cohere-dark-green mb-6">App/URL Preview</h3>
        <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-lg">
          <img
            src="/lovable-uploads/367b455b-5319-4832-915d-a9b5888efcc0.png"
            alt="App Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="space-y-6 overflow-y-auto max-h-[600px] pr-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="webUrl">Web URL or App ID*</Label>
            <Input
              id="webUrl"
              value={webUrl}
              onChange={(e) => setWebUrl(e.target.value)}
              placeholder="Enter URL or App ID"
              className="bg-white border-2 border-cohere-light-gray"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Login username (optional)</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="bg-white border-2 border-cohere-light-gray"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Login password (optional)</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="bg-white border-2 border-cohere-light-gray"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">Language (optional)</Label>
            <Input
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="e.g., English, Spanish"
              className="bg-white border-2 border-cohere-light-gray"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">City/Country (optional)</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., New York, USA"
              className="bg-white border-2 border-cohere-light-gray"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="persona">Persona description*</Label>
            <Input
              id="persona"
              value={persona}
              onChange={(e) => setPersona(e.target.value)}
              placeholder="Describe the user persona"
              className="bg-white border-2 border-cohere-light-gray"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="attention">Pay attention to (optional)</Label>
            <Input
              id="attention"
              value={attention}
              onChange={(e) => setAttention(e.target.value)}
              placeholder="Specific areas to focus on"
              className="bg-white border-2 border-cohere-light-gray"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ignore">Ignore (optional)</Label>
            <Input
              id="ignore"
              value={ignore}
              onChange={(e) => setIgnore(e.target.value)}
              placeholder="Areas to ignore"
              className="bg-white border-2 border-cohere-light-gray"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConfigForm;