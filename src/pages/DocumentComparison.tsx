import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const DocumentComparison = () => {
  const [step, setStep] = useState(1);
  const [docType, setDocType] = useState('');
  const [docUrl, setDocUrl] = useState('');
  const [selectedFlow, setSelectedFlow] = useState('');
  const [customFlow, setCustomFlow] = useState('');
  const { toast } = useToast();

  const handleNext = () => {
    if (step === 1 && !docUrl) {
      toast({
        title: "Missing Information",
        description: "Please provide a documentation URL to continue",
        variant: "destructive",
      });
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
            </div>

            <div className="flex justify-end">
              <Button 
                onClick={handleNext}
                className="bg-cohere-dark-green text-white hover:bg-opacity-90"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Document Preview */}
            <div className="bg-white p-8 rounded-lg border-2 border-cohere-light-gray">
              <h3 className="text-xl font-bold text-cohere-dark-green mb-4">Document Preview</h3>
              <div className="aspect-video bg-cohere-light-gray rounded-lg flex items-center justify-center">
                <p className="text-cohere-medium-gray">Preview will be shown here</p>
              </div>
            </div>

            {/* Right Column - Flow Selection */}
            <div className="bg-white p-8 rounded-lg border-2 border-cohere-light-gray space-y-6">
              <h3 className="text-xl font-bold text-cohere-dark-green">Which user flow or product feature are you trying to compare?</h3>
              
              <RadioGroup value={selectedFlow} onValueChange={setSelectedFlow}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="profile" id="profile" />
                    <Label htmlFor="profile">View/edit profile page</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="history" id="history" />
                    <Label htmlFor="history">View/edit watch history</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="collections" id="collections" />
                    <Label htmlFor="collections">View/edit my collections</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="custom" />
                    <Label htmlFor="custom">Not these? Tell us in your words</Label>
                  </div>
                </div>
              </RadioGroup>

              {selectedFlow === 'custom' && (
                <Input
                  placeholder="Describe the flow you want to compare"
                  value={customFlow}
                  onChange={(e) => setCustomFlow(e.target.value)}
                  className="mt-4 bg-white border-2 border-cohere-light-gray"
                />
              )}

              <div className="flex justify-between pt-4">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  className="border-2 border-cohere-light-gray hover:bg-cohere-light-beige"
                >
                  Previous
                </Button>
                <Button 
                  onClick={handleNext}
                  className="bg-cohere-dark-green text-white hover:bg-opacity-90"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentComparison;