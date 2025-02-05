import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    <div className="space-y-6">
      <div className="space-y-2 text-left">
        <Label htmlFor="webUrl">Web URL or App ID</Label>
        <Input
          id="webUrl"
          value={webUrl}
          onChange={(e) => setWebUrl(e.target.value)}
          placeholder="Enter URL or App ID"
          className="bg-white border-2 border-cohere-light-gray"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-cohere-dark-green text-left">
          Give our giggle AI agents more information to access your web/app:
        </h3>
        
        <div className="space-y-2 text-left">
          <Label htmlFor="username">Login username (optional)</Label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="bg-white border-2 border-cohere-light-gray"
          />
        </div>

        <div className="space-y-2 text-left">
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

        <div className="space-y-2 text-left">
          <Label htmlFor="language">Language (optional)</Label>
          <Input
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Default to EN-US"
            className="bg-white border-2 border-cohere-light-gray"
          />
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="location">City/country</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Default to Austin, TX"
            className="bg-white border-2 border-cohere-light-gray"
          />
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="persona">Persona description</Label>
          <Input
            id="persona"
            value={persona}
            onChange={(e) => setPersona(e.target.value)}
            placeholder="Describe the user persona"
            className="bg-white border-2 border-cohere-light-gray"
          />
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="attention">Pay attention to (optional)</Label>
          <Input
            id="attention"
            value={attention}
            onChange={(e) => setAttention(e.target.value)}
            placeholder="What should we pay special attention to?"
            className="bg-white border-2 border-cohere-light-gray"
          />
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="ignore">Please ignore (optional)</Label>
          <Input
            id="ignore"
            value={ignore}
            onChange={(e) => setIgnore(e.target.value)}
            placeholder="What should we ignore?"
            className="bg-white border-2 border-cohere-light-gray"
          />
        </div>
      </div>
    </div>
  );
};

export default AIConfigForm;